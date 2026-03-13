import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
}

function parseMarkdown(md: string): string {
  const html = md
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="mt-6 text-lg font-semibold text-foreground">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-foreground">$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // List items
    .replace(/^- (.+)$/gm, '<li class="ml-1">$1</li>')
    // Paragraphs (non-empty lines that aren't already tags)
    .replace(/^(?!<[hul]|<li)((?!^\s*$).+)$/gm, '<p class="mt-3 text-neutral-300">$1</p>')
    // Clean up empty lines
    .replace(/\n{2,}/g, "\n");

  // Wrap consecutive <li> runs in <ul>
  return html.replace(
    /(?:<li[^>]*>.*?<\/li>\n?)+/g,
    (match) => `<ul class="mt-3 list-disc space-y-2 pl-6">${match}</ul>`
  );
}

async function getReleases(): Promise<GitHubRelease[]> {
  const res = await fetch(
    "https://api.github.com/repos/TheNorthEestern/lagoon-releases/releases",
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return [];
  const releases: GitHubRelease[] = await res.json();
  return releases
    .filter((r) => r.published_at)
    .sort((a, b) => {
      const partsA = a.tag_name.replace(/^v/, "").split(".").map(Number);
      const partsB = b.tag_name.replace(/^v/, "").split(".").map(Number);
      for (let i = 0; i < 3; i++) {
        if ((partsB[i] ?? 0) !== (partsA[i] ?? 0)) return (partsB[i] ?? 0) - (partsA[i] ?? 0);
      }
      return 0;
    });
}

export default async function Changelog() {
  const releases = await getReleases();

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Changelog
        </h1>
        <p className="mt-2 text-lg text-text-secondary">
          What&apos;s new in Lagoon Studio.
        </p>

        <div className="mt-12 space-y-12">
          {releases.map((release) => (
            <article key={release.tag_name} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-0.5 text-sm font-medium text-accent">
                  {release.tag_name}
                </span>
              </div>
              <div
                className="mt-4 text-base leading-relaxed text-neutral-300"
                dangerouslySetInnerHTML={{
                  __html: parseMarkdown(release.body || ""),
                }}
              />
              {release !== releases[releases.length - 1] && (
                <div className="mt-12 border-t border-border" />
              )}
            </article>
          ))}
        </div>

        {releases.length === 0 && (
          <p className="mt-12 text-text-secondary">
            No releases yet. Check back soon.
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
