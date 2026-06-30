<script>
	import Step from "./Step.svelte";
    
    let steps = [
        { name: 'Bloom Dunedin', icon: 'fa-solid fas fa-desktop', description: 'This is the webite i created for Bloom Dunedin, a new art and music space in Ōtepoti. Bloom Dunedin is also a venue that is available for hire. This website along with its domain is hosted on hostinger together', href: 'https://bloomdunedin.com' },
        { name: 'Zehavit Ceramics', icon: 'fa-solid fas fa-desktop', description: 'This is the website I created for Zehavit Ceramics a pottery workshop in Macandrew Bay, Dunedin that sells ceramics and pottery lessons. This website is hosted securely on hostinger and connected to an external domain the client keeps', href: 'https://zehavitceramics.com' }
    ]

    let profileImage = "images/profile.png"
    

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">

            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
             Hi, I'm <span class="poppins text-violet-400">Ben</span> Darlington<br/> Full Stack
             <span class="poppins text-violet-400">Developer</span>
             </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="poppins text-violet-400">favourite tech</span> includes Python, Java, JavaScript, SvelteKit, Tailwind CSS, and MYSQL. I enjoy building <span class="poppins text-violet-400">websites</span> and <span class="poppins text-violet-400">applications</span> that are both functional and visually appealing.  
            </p>
            <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins
             relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="#contacts">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>

                <h4 class="relative z-10">Get in touch &rarr;</h4>
             </a>

        </div>
        <div class="relative shadow-2xl grid place-items-center">

            <img src={profileImage} alt="Ben" class="object-cover z-2 max-h-[70vh]"/>
        </div>

    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work? </h3>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
            <Step step={steps[0]}>

                <strong class="text-violet-400"></strong>
            </Step>

            <Step step={steps[1]}>

                <strong class="text-violet-400"></strong>
            </Step>
        
        </div>
    </section>

    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">

        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
        after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
        <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?

        </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400"> about</span> me.


        </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am ... </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-200">
        <p class="text-center text-base sm:text-lg md:text-xl">
               I am a junior software developer based in Dunedin, New Zealand. I recieved my bachelor's degree in Computer Science from the University of Otago in 2025. I currently work at a Dunedin based agritech startup developing internal tools and applications to speed up and improve the efficiency of operations. Always looking for my next project.
        </p> 
    </div>
    </section>
    
</main>