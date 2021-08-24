const readline=require("readline-sync")
function question_please(i){
    question=["how many continents are there","What is the capital of india","NG mai kon sa cource padhya jata hai"]
    console.log(question[i])
}
function options_please(i,j){
    options=[["four","nine","seven","eight"],["chatisgarh","bhopal","channi","delhi"],["software engineering","counselling","tourisem","Agriculure"]]
    console.log(j+1,options[i][j])
}
function solution_please(i){
    solution=[3,4,1]
    sol=solution[i]
    return sol
}
function dubal_option(i){
    ops=[["1 four","3 seven"],["2 bhopal","4 delhi"],["1 software engineering","2 tourisem"]]
    console.log(ops[i][0])
    console.log(ops[i][1])
}

txt="####*Kaun Banega Corodpati (KBC)*####"
console.log(txt)

var count=0;
for (var i=0;i<3;i++){
    console.log("👇")
    console.log("Your question is on your screen")
    question_please(i)
    for(var j=0;j<4;j++){
        options_please(i,j)
    }
    const user=readline.question("Choose Correct Answer or Use 5050 life line\n")
    answer_solution=solution_please(i)
    if (user==answer_solution){
        console.log("congratulations")
    }
    else if(user == "5050"){
        if (count<1){
            count=count+1  
            dubal_option(i)
            user1=readline.question("you have 2 answers to choose")
            z=solution_please(i)
            if (user1==z){
                console.log("congratulations")
            }
            else{
                console.log("game over")
                break;
            }  
        }
        else{
            console.log("you have already used life line")
            r=solution_please(i)
            user2=readline.question("enter your answer")
            if (user2==r){
                console.log("congratulations")
            }
            else{
                console.log("Game over")
                break
            }       
        }   
    }
    else{
        console.log("Game over")
        break;
    }  
}