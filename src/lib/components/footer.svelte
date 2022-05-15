<script>
  import TwitterIcon from "./twitter-icon.svelte";
</script>
<footer class="p-4 footer bg-primary text-primary-content footer-center">
    <div class="grid grid-flow-col gap-4">
      <a class="link link-hover" href="/about">About</a> 
      <a class="link link-hover" href="/contact">Contact</a> 
    </div> 
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="twitter">
          <TwitterIcon />
        </a> 
      </div>
    </div> 
    <div>
      <p>Copyright © {`${new Date().getFullYear()}`} - All right reserved by JM61.DEV</p>
    </div>
  </footer>