const searchInput=document.querySelector("#search-input");
searchInput.addEventListener("keydown",function(event){
    if(event.code=="Enter"){
        search();
    }
})
function search() {
       const input =searchInput.value
    window.location.href="https://www.google.com/search?q="+input+"web&sxsrf=AJOqlzWnEQlaFNGrSgzj-mnQHjgMxjpdPQ%3A1679570821436&source=hp&ei=hTccZP7OGIv8-Qb27JGwCQ&iflsig=AK50M_UAAAAAZBxFlQs-DBKjTo5LlVYsXGLJhw-MAvX0&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYATIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWABg4EVoAXAAeACAAQCIAQCSAQCYAQCwAQo&sclient=gws-wiz"
    
}