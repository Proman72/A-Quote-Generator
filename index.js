var quote = document.querySelector('#quote')
var author = document.querySelector('#author')

function change(){
    var randomNumber = Math.random() * 10
    var rounded = Math.round(randomNumber)
        if(rounded == 0){
            console.log(rounded)
            document.querySelector('#img').src = './images/neils bohr.jfif'
            document.querySelector('#quote').innerHTML = '“An expert is a person who has made all the mistakes that can be made in a very narrow field.”'
            document.querySelector('#author').innerHTML = 'Neils Bohr'
        }
        else if(rounded == 1){
            console.log(rounded)
            document.querySelector('#img').src = './images/arthur.jfif'
            document.querySelector('#quote').innerHTML = '“I’m sure the universe is full of intelligent life. It’s just been too intelligent to come here.”'
            document.querySelector('#author').innerHTML = 'Arthur C. Clarke'
        }
        else if(rounded == 2){
            console.log(rounded)
            document.querySelector('#img').src = './images/fred.jfif'
            document.querySelector('#quote').innerHTML = '“Life cannot have a random beginning… the trouble is that there are about 2000 enzymes, and the chance of obtaining them all in a random trial is only one part in 10^40,000 an outrageously small probability that could not be faced even if the whole universe consisted of organic soup.”'
            document.querySelector('#author').innerHTML = 'Fred Hoyle'
        }
        else if(rounded == 3){
            console.log(rounded)
            document.querySelector('#img').src = './images/john.jfif'
            document.querySelector('#quote').innerHTML = '“There is no law except the law that there is no law.”'
            document.querySelector('#author').innerHTML = 'John Archibald Wheeler'
        }
        else if(rounded == 4){
            console.log(rounded)
            document.querySelector('#img').src = './images/immanuel.jfif'
            document.querySelector('#quote').innerHTML = '“Science is organized knowledge. Wisdom is organized life.”'
            document.querySelector('#author').innerHTML = 'Immanuel Kant '
        }
        else if(rounded == 5){
            console.log(rounded)
            document.querySelector('#img').src = './images/ludwig.jfif'
            document.querySelector('#quote').innerHTML = '“We feel that even if all possible scientific questions be answered, the problems of life have still not been touched at all.”'
            document.querySelector('#author').innerHTML = 'Ludwig Wittgenstein'
        }
        else if(rounded == 6){
            console.log(rounded)
            document.querySelector('#img').src = './images/nicolaus.jfif'
            document.querySelector('#quote').innerHTML = '“There are many babblers, wholly ignorant of mathematics, who dare to condemn my hypothesis, upon the authority of some part of the Bible twisted to suit their purpose. I value them not and scorn their unfounded judgment.”'
            document.querySelector('#author').innerHTML = 'Nicolaus Copernicus'
        }
        else if(rounded = 7){
            console.log(rounded)
            document.querySelector('#img').src = './images/richard.jfif'
            document.querySelector('#quote').innerHTML = '“The feeling of awed wonder that science can give us is one of the highest experiences of which the human psyche is capable.”'
            document.querySelector('#author').innerHTML = 'Richard Dawkins'
        }
        else if(rounded == 8){
            console.log(rounded)
            document.querySelector('#img').src = './images/claude.jfif'
            document.querySelector('#quote').innerHTML = '“The scientist is not a person who gives the right answers, he’s one who asks the right questions.”'
            document.querySelector('#author').innerHTML = 'Claude Levi-Strauss'
        }  
        else if(rounded == 9){
            console.log(rounded)
            document.querySelector('#img').src = './images/hawking.jfif'
            document.querySelector('#quote').innerHTML = '“Scientists have become the bearers of the torch of discovery in our quest for knowledge.”'
            document.querySelector('#author').innerHTML = 'Stephen Hawking '
        }
        else if(rounded == 10){
            console.log(rounded)
            document.querySelector('#img').src = './images/will.jfif'
            document.querySelector('#quote').innerHTML = '“Science is organized knowledge. Wisdom is organized life.”'
            document.querySelector('#author').innerHTML = 'Will Durant'
        }
        else{
            console.log(false)
            document.querySelector('#img').src = './images/basic.jfif'
            document.querySelector('#quote').innerHTML = '_'
            document.querySelector('#author').innerHTML = '_'
        }
    }
