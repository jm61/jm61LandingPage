<script>
  import TwitterIcon from "./twitter-icon.svelte";
  import GithubIcon from "./github-icon.svelte";
  import LinkedinIcon from "./linkedin-icon.svelte";
</script>
<footer class="p-4 footer bg-primary text-primary-content footer-center">
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover" href="/aboutMe">About</a> 
      <a class="link link-hover" href="/contact">Contact</a> 
    </div> 
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://twitter.com/@Jm61Dev" target="_blank">
          <TwitterIcon />
        </a> 
        <a href="https://github.com/jm61" target="_blank">
          <GithubIcon />
        </a> 
        <a href="https://www.linkedin.com/in/jm61dev"target="_blank">
          <LinkedinIcon />
        </a> 
      </div>
    </div> 
    <div>
      <p>Copyright © {`${new Date().getFullYear()}`} - All right reserved by JM61.DEV ||  <a class="hover:border-b-2 hover:border-primary-content" href="https://www.freecodecamp.org" target="_blank">FreeCodeCamp</a> & (<a href="https://scottspence.com" target="_blank" class="hover:border-b-2 hover:border-primary-content">Scott Spence</a>) </p>
    </div>
  </footer>