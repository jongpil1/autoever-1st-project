export interface GithubContext {
    readme : string
    commits : string[]
}

function parseGithubRepo(url:string) : { owner : string; repo : string} | null {
    try {
        const { hostname, pathname} = new URL(url)
        if(!hostname.includes("github.com")) return null

        const [, owner, repo] = pathname.split("/")
        if(!owner || !repo) return null

        return {owner, repo: repo.replace(/\.git$/, "")}
    } catch {
        return null
    }
}

function decodeBase64Utf8(base64 : string) : string {
    const binary = atob(base64.replace(/\n/g, ""))
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
    return new TextDecoder("utf-8").decode(bytes)
}

export default async function getGithubContext(repositoryUrl:string) : Promise<GithubContext | null> {
    const parsed = parseGithubRepo(repositoryUrl)
    if (!parsed) return null

    const {owner, repo} = parsed

    const [readmeRes, commitsRes] = await Promise.all([
        fetch(`https://api.github.com/repos/${owner}/${repo}/readme`),
        fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`),
    ])

    let readme = ""
    if(readmeRes.ok) {
        const readmeJson = (await readmeRes.json()) as {content : string}
        readme = decodeBase64Utf8(readmeJson.content)
    }

    const commits = commitsRes.ok 
    ? ((await commitsRes.json()) as {commit : {message : string}}[]).map(
        (c) => c.commit.message.split("\n")[0],
    ) : []

    return {readme, commits}

}