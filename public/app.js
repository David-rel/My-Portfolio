const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();


//portfolio
// add pictures to portfolio apps

//blog
//write the blogs


//github links
function Github() {
    document.location.href="https://github.com/David-rel/";
}

function GitHubUniswapClone(){
    document.location.href="https://github.com/David-rel/uniswap-clone-client";
}

function GitHubAmazonClone(){
    document.location.href="https://github.com/David-rel/amazon-clone";
}

function GitHubRoboticsScouter(){
    document.location.href="https://github.com/David-rel/FIRST-Robotics-Scouter";
}

function GitHubInstagramClone(){
    document.location.href="https://github.com/David-rel/Instsgram-clone";
}

function GitHubBudgetApp(){
    document.location.href="https://github.com/David-rel/BudgetApp";
}

function GitHubTetris(){
    document.location.href="https://github.com/David-rel/Tetris";
}

function GitHubMinecraftMod(){
    document.location.href="https://github.com/David-rel/Crystal-Mod";
}

function GitHubUnityFighter(){
    document.location.href="https://github.com/David-rel/";
}

function GitHubMyBlog(){
    document.location.href="https://github.com/David-rel/MyBlog";
}

function GitHubUno(){
    document.location.href="https://github.com/David-rel/Uno";
}

function GitHubWordle(){
    document.location.href="https://github.com/David-rel/Dwordle";
}

function GitHubPortfolio(){
    document.location.href = "https://github.com/David-rel/My-Portfolio";
}

function GitHubMybrary(){
    document.location.href="https://github.com/David-rel/Mybrary";
}

function GitHubBattleship(){
    document.location.href="https://github.com/David-rel/BattleShip";
}

function GitHubTextAdventure(){
    document.location.href="https://github.com/David-rel/OregonRoadProject";
}

function GitHubPong(){
    document.location.href="https://github.com/David-rel/Pong";
}

function GitHubSnake(){
    document.location.href="https://github.com/David-rel/Snake";
}

function GitHubChirp(){
    document.location.href="https://github.com/David-rel/chirp"
}

function GitHubRobotics(){
    document.location.href="https://github.com/RegisJesuitRobotics/robotics-webpage"
}

function GitHubElse(){
    document.location.href="https://github.com/David-rel/Projects-I-Want-to-Do/blob/main/README.md";
}

function GitHubLitLine() {
  document.location.href = "https://github.com/David-rel/LitLine";
}


//other websites
function Chirp(){
    document.location.href="chirp-murex.vercel.app";
}

function Robotics(){
    document.location.href="https://rjhs-3729.vercel.app/";
}

function Amazon(){
    document.location.href="https://merry-scone-f8498d.netlify.app/";

}

function Uniswap(){
    document.location.href="https://uniswap-clone-delta.vercel.app";

}


function Instagram(){
    document.location.href="https://instagram-clone-8c0a6.web.app/";

}

function Dworlde(){
    document.location.href="https://dwordle-e2c78.web.app/";

}

function Portfolio(){
    document.location.href="https://portfolio-david-72615.web.app/";

}

function Mybrary(){
    document.location.href="https://mybrary-david-rel.herokuapp.com/";

}

function Battleship(){
    document.location.href="https://battleship-david.herokuapp.com/";

}

function LitLine() {
    document.location.href = "https://lit-line.vercel.app/";
}



//blog links

function BlogWebStacks(){
    document.location.href="https://davidfales.blogspot.com/2022/06/blog-post_802.html";
}

function BlogRoboticsClub(){
    document.location.href="https://davidfales.blogspot.com/2022/06/blog-post_39.html";
}

function BlogItInternship(){
    document.location.href="https://davidfales.blogspot.com/2022/06/internship-at-IT-Janus.html";
}

function BlogLanguage(){
    document.location.href="https://davidfales.blogspot.com/2022/06/programming-a-language.html";
}

function BlogWebThree(){
    document.location.href="https://davidfales.blogspot.com/2022/06/why-I-love-web3.html";
}

function BlogDeFi(){
    document.location.href="https://davidfales.blogspot.com/2022/06/blog-post.html";
}

function ChatGPT4(){
    document.location.href="https://davidfales.blogspot.com/2023/03/my-experience-using-chat-gpt-4.html";
}

function Zoom(){
    document.location.href="https://davidfales.blogspot.com/2023/03/my-1-day-mini-mentorship-with-zoom.html";
}









function SubmitForm(){
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const subject = document.getElementById('subject')    
    const message = document.getElementById('message')

    console.log(name.value)
    console.log(email.value)
    console.log(message.value)
    console.log(subject.value)


    fetch('https://formspree.io/f/xbjeknpj', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name.value, email: email.value, subject: subject.value, message: message.value })
    })

    alert('sent message')



}