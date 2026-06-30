<script>
    let socials = [
        { label: 'Email', value: 'bendarlington21@gmail.com', icon: 'fa-solid fa-envelope', href: 'mailto:bendarlington21@gmail.com', external: false },
        { label: 'Github', value: 'bendar21', icon: 'fa-brands fa-github', href: 'https://github.com/bendar21', external: true },
        { label: 'LinkedIn', value: 'Ben Darlington', icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/ben-darlington-440050375/', external: true }
    ];
</script>

<footer id="contacts" class="py-20 sm:py-32 bg-slate-950 border-t border-solid border-violet-950 flex flex-col gap-8 sm:gap-10 items-center px-4">

    <span class="px-4 py-2 bg-white text-slate-950 font-medium rounded-full text-sm">
        Connect with me &darr;
    </span>

    <div class="flex flex-col gap-4 w-full max-w-md">
        {#each socials as social (social.label)}
        
        <a
            href={social.href}
            target={social.external ? '_blank' : undefined}
            rel={social.external ? 'noreferrer' : undefined}
            class="flex items-center gap-3 w-full px-4 py-3 border border-solid border-violet-950 rounded-lg hover:border-violet-400 duration-200"
        >
            <i class="{social.icon} text-violet-400 text-lg"></i>
            <div class="flex flex-col flex-1 text-left">
                <span class="text-xs text-slate-500">{social.label}</span>
                <span class="text-sm">{social.value}</span>
            </div>
            {#if social.external}
            <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500"></i>
            {/if}
        </a>
        {/each}
    </div>

    <p class="text-xs text-slate-500">&copy; 2026 Ben Darlington. Built with SvelteKit and Tailwind CSS.</p>

</footer>