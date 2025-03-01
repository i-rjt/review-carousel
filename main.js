let prev;
let next;
let count = 0;

function handler(e,details){
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const desg = document.getElementById("desg");
    const descript = document.getElementById("descript");
    let id = e.target.id;
    let random = details[Math.floor(Math.random() * details.length)];

    prev = details[count];
    next = details[count + 1];

    if(id == "larr"){
        img.src = prev.img;
        name.innerText = prev.name;
        desg.innerText = prev.desg;
        descript.innerText = prev.descript;
        count--;
        if(count < 0){
            count = details.length - 1;
        }
    }else if(id == "rarr"){
        img.src = next.img;
        name.innerText = next.name;
        desg.innerText = next.desg;
        descript.innerText = next.descript; 
        count++;
        if(count == details.length - 1){
            count = 0;
        }
    }else{
        img.src = random.img;
        name.innerText = random.name;
        desg.innerText = random.desg;
        descript.innerText = random.descript;
    }
   
};
function data(){
    let obj = [{
        img: "https://res.cloudinary.com/dunm1zbgo/image/upload/v1740810534/girl2_zehjzz.jpg",
        name: "Emma Carter",
        desg: "Marketing Director",
        descript: "Emma is highly driven and creative individual. Known for her strategic thinking and ability to adapt to change, she brings fresh, innovative ideas to the table. Emma is empathetic and values teamwork, often taking the time to mentor younger staff members. Her strong communication skills make her a natural leader in her department.",
    },
    {
        img: "https://res.cloudinary.com/dunm1zbgo/image/upload/v1740810533/boy3_wfywfx.jpg",
        name: "David Lin",
        desg: "Senior Software Engineer",
        descript: "David is a problem solver at heart. Detail-oriented and analytical, he is dedicated to creating efficient, high-quality solutions. Despite his quiet nature, David is a dependable team member who always meets deadlines and enjoys collaborating with others. He is patient and enjoys teaching newcomers about best practices in coding.",
    },
    {
        img: "https://res.cloudinary.com/dunm1zbgo/image/upload/v1740810533/girl1_lvf5f3.jpg",
        name: "Sophia Martinez",
        desg: "Human Resources Manager",
        descript: "Sophia is compassionate, approachable, and known for her people skills. She's the go-to-person for resolving conflicts and supporting employees in thier professional growth. Her strong sense of fairness and respect for all individuals make her and excellent advocate for diversity and inclusion within the company.",
    },
    {
        img: "https://res.cloudinary.com/dunm1zbgo/image/upload/v1740810531/boy2_etx9py.jpg",
        name: "James Patel",
        desg: "Cheif Financial Officer(CFO)",
        descript: "James is a practical, logical, and incredibly organized. His strong sense of responsibility is matched by a deep understanding of the company's financial goals. While he is a bit reserved, his throughness in decision-making inspires trust. James is always focused on achieving long-term stability and growth for the company.",
    }, 
    {
        img: "https://res.cloudinary.com/dunm1zbgo/image/upload/v1740810528/boy1_yqytyo.jpg",
        name: "Olivia Thompson",
        desg: "Customer Success Manager",
        descript: "Olivia is a friendly, energetic, and customer-centric person. She's dedicated to ensuring that client have the best experience with the company's products and services. Olivia thrives in high-pressure situations, always maintaining a positive attitude and a solution-oriented mindset. She is excellent at building relationships and gaining customer trust."
    }
    ];
    return obj;
}

function display(){
    let details = data();
   let btns = document.querySelector(".btns").addEventListener("click",function hand(event){
       handler(event,details);
   });

    document.getElementById("img").src = details[0].img;
    document.getElementById("name").innerText = details[0].name;
    document.getElementById("desg").innerText = details[0].desg;
    document.getElementById("descript").innerText = details[0].descript;
}

display();