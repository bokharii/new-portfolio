document.addEventListener('DOMContentLoaded', () => {
    //check if user has visited the home page through cookies (current session)
    if (!sessionStorage.getItem('hasVisited')){
        //if they haven't, play the animation
        document.getElementById('heading').classList.add('fade-fast');
        document.getElementById('subheading').classList.add('fade-delayed');
        document.getElementById('links').classList.add('fade-delayed');

        // //set a flag to mark the page as already visited to prevent the animation to keep replaying
        sessionStorage.setItem('hasVisited', 'true');
    }
});