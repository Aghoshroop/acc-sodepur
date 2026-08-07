$pages = @("gallery", "overview", "records", "results", "schedule", "sponsors", "standings", "teams")

foreach ($page in $pages) {
    $Title = $page.Substring(0, 1).ToUpper() + $page.Substring(1)
    
    $mobileDir = "src/app/(app)/premier-relay/$page/mobile"
    if (-not (Test-Path -Path $mobileDir)) {
        New-Item -ItemType Directory -Path $mobileDir | Out-Null
    }

    $mobileFile = "$mobileDir/Mobile$Title`Page.tsx"
    
    $mobileContent = @"
export default function Mobile$Title`Page() {
  return (
    <div className="pt-24 pb-12 px-6">
      <h1 className="text-3xl font-light uppercase tracking-widest text-acc-white mb-6">
        $($page.ToUpper())
      </h1>
      <p className="text-acc-gray text-sm">
        This section is currently under construction.
      </p>
    </div>
  );
}
"@
    Set-Content -Path $mobileFile -Value $mobileContent

    $pageFile = "src/app/(app)/premier-relay/$page/page.tsx"
    
    $pageContent = @"
import Mobile$Title`Page from './mobile/Mobile$Title`Page';

export default function $Title`Page() {
  return (
    <main className="w-full bg-[#0A0A0A] min-h-screen">
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden lg:block w-full">
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-widest text-acc-white mb-8">
            $($page.ToUpper())
          </h1>
          <p className="text-acc-gray text-lg">
            This section is currently under construction.
          </p>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="block lg:hidden w-full relative z-20">
        <Mobile$Title`Page />
      </div>
    </main>
  );
}
"@
    Set-Content -Path $pageFile -Value $pageContent
}
Write-Output "Done"
