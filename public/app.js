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
    document.location.href="https://github.com/David-rel/"; //still need this -----------------------------
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
    document.location.href="https://github.com/David-rel/Portfolio-David";
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

function GitHubElse(){
    document.location.href="https://github.com/David-rel/Projects-I-Want-to-Do/blob/main/README.md";
}


//other websites
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



//blog links
function BlogWebsiteBuild(){
    document.location.href="https://davidfales.blogspot.com/2022/06/how-to-create-website.html";
}

function BlogWebStacks(){
    document.location.href="https://davidfales.blogspot.com/2022/06/web-stacks-I-Like.html";
}

function BlogRoboticsClub(){
    document.location.href="https://davidfales.blogspot.com/2022/06/robotics-club.html";
}

function BlogItInternship(){
    document.location.href="https://davidfales.blogspot.com/2022/06/internship-at-IT-Janus.html";
}

function BlogRoboticsInternship(){
    document.location.href="https://davidfales.blogspot.com/2022/06/internship-at-tech-firm.html";
}

function BlogLanguage(){
    document.location.href="https://davidfales.blogspot.com/2022/06/programming-a-language.html";
}


function BlogWebThree(){
    document.location.href="https://davidfales.blogspot.com/2022/06/why-I-love-web3.html";
}

function BlogDeFi(){
    document.location.href="https://davidfales.blogspot.com/2022/06/defi-blockchain.html";
}

function BlogTeam(){
    document.location.href="https://davidfales.blogspot.com/2022/06/programing-with-team.html";
}