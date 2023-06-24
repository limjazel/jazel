<script>
  import MiniMacDock from "./MiniMacDock.svelte";
  import MiniMacWindow from "./MiniMacWindow.svelte";
  import DesktopFolder from "./DesktopFolder.svelte";

  let tools = [
    {
      name: "Visual Studio Code",
      description:
        "My current editor! Friendship ended with PHPStorm (I am broke), Sublime and Notepad++, now, VSCode is 🤝 my best friend.",
      extensions: "Prettier, Svelte for VS Code, Tailwind CSS Intellisense",
      icon_url: "/images/logos/vscode.webp",
    },
    {
      name: "iTerm2",
      description:
        "I prefer the terminal to be separated from the code editor when I work, and the default one mac has isn't too kind to the eyes, also recommended by a friend, iTerm has since been a staple tool I regulary use.",
      icon_url: "/images/logos/iTerm.webp",
    },
    {
      name: "Arc Browser",
      description:
        "I tried it out and stuck with it because of how clean it looks when the sidebar is hidden. I still use both Safari and Firefox though.",
      extensions: "WhatFont, ColorZilla, Awesome Screenshot",
      icon_url: "/images/logos/arc.webp",
    },
    {
      name: "Figma",
      description:
        "Figma is a star 🤩. From doing process flows, mockups, prototypes, documents, vectors and doing basic photo editing. Figma has almost everything I need for the basic things in life.",
      extensions: "Image Tracer, Feather Icons, Lorem Ipsum",
      icon_url: "/images/logos/figma.webp",
    },
    {
      name: "Affinity Designer",
      description:
        "Affinity Designer was introduced to me and I've been using it for work requiring fancier vectors!",
      icon_url: "/images/logos/affinity_designer.webp",
    },
    {
      name: "Procreate",
      description:
        "For sketching out ideas and making illustrations, Procreate is my favorite hobby buddy. (So far).",
      icon_url: "/images/logos/procreate.webp",
    },
    {
      name: "Adobe Photoshop",
      description:
        "I rarely do photo editing anymore, but Photoshop is still my go-to and what I'm comfortable with.",
      icon_url: "/images/logos/adobe_photoshop.webp",
    },
    {
      name: "Alfred",
      description:
        "A custom spotlight search for mac, makes looking for stuff easier and opening apps faster. Makes me more productive (😉).",
      icon_url: "/images/logos/alfred.webp",
    },
    {
      name: "iCloud",
      description:
        "Growing older made me realize there is never enough cloud storage even for a normal person like me. I mainly use iCloud for storing anything. I still use Google drive on some occassions especially for file sharing.",
      icon_url: "/images/logos/icloud.webp",
    },
  ];

  /**
   * @type {{ name: string; description: string; extensions: string; } | { name: string; description: string; extensions?: undefined; }}
   */
  let selectedTool = tools[0];
  let showInfo = true;

  /**
   * @param {{ name: string; description: string; extensions: string; } | { name: string; description: string; extensions?: undefined; }} tool
   */
  function toggleTool(event) {
    selectedTool = event.detail.tool;
    showInfo = true;
  }
</script>

<div
  class="[ mt-12 ] [ flex flex-col items-center justify-between ]
         [ bg-mac bg-cover bg-center border-8 border-neutral ]
         [ min-h-[48rem] shadow-md rounded-md overflow-hidden ]"
>
  <div class="[ glass-effect shadow-sm ] [ py-1.5 px-5 w-full ]">
    {#if selectedTool && showInfo}
      <span class="[ flex items-center gap-4 ]">
        <i class="fa-brands fa-apple [ text-lg ]" aria-hidden="true" />
        <span class="[ font-semibold text-sm relative top-0.5 ]">
          {selectedTool.name}
        </span>
      </span>
    {:else}
      <span class="[ flex items-center gap-4 ]">
        <i class="fa-brands fa-apple [ text-lg ]" aria-hidden="true" />
        <span class="[ font-semibold text-sm relative top-0.5 ]"> Apelle </span>
      </span>
    {/if}
  </div>

  <div class="[ absolute top-16 right-3 md:right-6 ]">
    <DesktopFolder />
  </div>

  {#if showInfo && selectedTool}
    <MiniMacWindow {selectedTool} on:close={() => (showInfo = false)} />
  {/if}

  <div>
    <MiniMacDock {tools} {selectedTool} {showInfo} on:toggle={toggleTool} />
  </div>
</div>
