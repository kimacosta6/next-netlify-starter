import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
export default function Home() {
  return (
    <div className="container">
      <Head>
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inspirational Reflections</title>
    <style>
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background: #00A3CF;
            color: #333;
            overflow: hidden;
            position: relative;
        }
        #reflectionContainer {
            position: absolute;
            text-align: center;
            font-size: 1.5em;
            max-width: 60%;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            background: #ffffff;
            opacity: 0;
            transform: scale(0.5);
            transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
        }
    </style>
      </Head>
      <main>
        <Header title="Welcome to my app!" />
       <div id="reflectionContainer">Loading inspiration...</div>

    <script>
        // Reflections array (replace with actual reflections)
        const reflections = [
"I reflected on  everything and the best thing I did was the learning part because I learned how to make a 3D project and I never done that before.",
"This was the best project ever!",
"i  learned how to determine the best range of price for the quality of my item.",
"i learned that you cant rush the process of owning your own business. even though i have a lot to learn i think this was helpful. i learned how to make a doc form to survey my items to see what costumers like best.",
"I am proud of finishing my work today.",
"I am proud of how I made a keychain and how i did it buy step by step  ",
"i am proud of my project and how it trend out ",
"i am proud that i made a dog tag ",
"I learned how to make a picture to a .SVG file and I am proud of what my keychain looks  like.",
"Iâ€™m proud of my character i made by myself on tinker.",
"im proud about making the keychain and whats all  the steps too make it\n",
"I'm proud of finishing my 3D design. ",
"I'm proud of finishing my work",
"I'm proud of how my 3d print came along ",
"I'm proud of my design because I've never made a 3D model before. It has been a great accomplishment.",
"I'm proud that I am learning hoe=w to use a 3d printer",
"I'm proud that I can make something in 3d and how to make holes for keychains and how to import a .SVG file into tinkercad.",
"I'm proud that i learned how to do things that i didn't know how to do before ",
"I'm proud that I overcame the frustration of not knowing what to do.",
"proud of getting it done ",
"I learned how to create an item for 3D printing. I am proud that I did it successfully.",
"I am most proud of finishing my keychain, and I am proud of the way it looks. ",
"I learned how to make a really good survey and use sections so you can give people questions based on what they answer ",
"I learned how to make a survey in google drive. I a good thing i learned this because if I need to collect data I can just make a survey so that I can get everyone's opinion.",
"I learned that pie charts are a good way to collect data from others. I will use this information to find out what kids in the school like and how I can get people to buy my products.",
"i will use a form because it worked out good",
"I am proud of learning how to make shapes for when it comes in handy I know how to make them instead of struggling.",
"I AM, BUT I DONT THINK IT LOOKS GOOD. it literally says skibidi",
"I think my design looked good and I learned how people 3-d print things",
"I'm proud of designing my own 3D printed item.",
"you would have to go to tiker then copy the stl then go to kirimoto then your all good.",
"I learned that it is good to add up numbers at a good price.",
"that it would be a good price ",
"it was good i found it very interesting ",
"I am most proud of is how I got to use my skill in 3D modeling and how my product turned out to be as good as I can make it",
"I'm most proud of the keychain I made I think it looks really good.",
"i am most proud of completing everything and learning how to use tinkercad.",
"I am most proud of getting to 3D print something \n",
"i am most proud of learning to create a 3d object in tinkercad",
"I am most proud of my 3D Model",
"I am most proud of my quiz grade.",
"I am most proud of my timing. I had one day skipped and caught up on everything in one day.",
"I am most proud of myself for learning how to make a keychain.\n",
"I am most proud of the fact that i learned how to make a 3-d item.",
"I am most proud of the proses of making my object.",
"I am the most proud of the treble clef I created in Tinkercad.",
"i learned how to make a keychain from 3d printing and I'm most proud of doing my work",
"I most proud of making the design because it was trick but i got through it.",
"i was most proud of making the form",
"I'm most proud of finishing my 3D project ",
"Im most proud of making the keychain.",
"Im most proud of my design  is the number because the number five has a lot of meanings and means a lot to me.",
"Im proud of being able to understand all the steps.",
"Reflecting off my thinking, learning, and work today, the things that I am most proud of is me now knowing how to make a 3D printed Item.",
"The thing I am most proud is the 3d print I made.",
"what I am most proud of is that I learned how to make a Google form",
"What I'm most proud of is my 3D design ",
"It's very interesting in designing 3D school buildings",
"I am the most proud about how easy it was to learn to make a 3D model. And i'm also proud about how my project came out",
"Making your own keychain is great, it helps me be creative and think about the things I do.",
"Iâ€™m most proud of being able to finish my keychain because I put a good amount of work into it.",
"I'm most proud of building my own 3D store and even learning how to do it on my own.",
"\nMy life is amazing I want a heat and star around it ",
"   I learned how to make sections and how to connect them to each question, I will use this again as I really liked making them.",
"I learned that when researching marketing you can bulild your own products.",
"I most proud of my design and how I was able to make something and I most proud of how I was able to work my way around my problems.",
"I think this was an interesting assignment, and i am really proud of myself for being able to do this as I have never done anything like this.",
"my development of my print because I think its nice",
"What I'm most proud of is that i was able to create a keychain and also design it.",
"How would you feel if you get to make and crate your own 3D model and youll learn what you need to do to make your 3D model you will learn how to upload and print ",
"i liked making my own sprite",
"I liked putting all the pieces together and seeing how they work together.",
"I learned how to make a flyer for selling things and I can use the skills to make my own flyer for when and if I sell something.",
"If I create my own business I know have some knowledge on how to do so or start.",
"You can start your own business and make a lot of money off of a poster.",
"im most proud of my design, i really enjoyed making it and it would be nice to make more",
"To make sure you always check the survey and do it yourself before letting someone else do it, This helps to make sure it is good to go and has no errors.",
"very easy and step by step instructions are provided.",
"i am proud from building my golden toliet",
"I'm pretty proud of the keychain i made because its my dogs name. ",
"the design i can say I'm pretty proud with how it turned out",
"The thing I enjoyed most about this lesson is I liked all the cute photo's that we could used.",
"I am most proud of making Elvis and giving him equipment because I never knew if I was allowed to but I think I am allowed too now. It is also my first time 3D printing something that I made myself.",
"I didn't understand it at first but then I got the hang of it that's what I am most proud of.",
"You can slice your design into thinner and thicker like how you want it to look. You have to be very precise. The more you use the longer it takes to 3d print.",
"From my learning and my understanding is the most I'm proud with is the keychain practice. It made me think and use my calculations to group, coloring and it was just so fun and easy. it also helped me to use clues.",
"How making a surveies helps find out what is most wanted and/or needed to people.",
"How to make a Google form I didn't know how to do that before. :]",
"how to make a store. And most of the things that they said i didn't know",

            // Add all 100 reflections here as strings
        ];

        const reflectionContainer = document.getElementById('reflectionContainer');

        function getRandomReflection() {
            return reflections[Math.floor(Math.random() * reflections.length)];
        }

        function getRandomPosition() {
            const x = Math.random() * (window.innerWidth - reflectionContainer.offsetWidth);
            const y = Math.random() * (window.innerHeight - reflectionContainer.offsetHeight);
            return { x, y };
        }

        function displayReflection() {
            reflectionContainer.style.opacity = 0;
            reflectionContainer.style.transform = 'scale(0.5)';
            
            setTimeout(() => {
                // Set new random position
                const { x, y } = getRandomPosition();
                reflectionContainer.style.left = `${x}px`;
                reflectionContainer.style.top = `${y}px`;

                // Update the text and apply zoom-in effect
                reflectionContainer.innerHTML = getRandomReflection();
                reflectionContainer.style.opacity = 1;
                reflectionContainer.style.transform = 'scale(1)';
            }, 1000);
        }

        // Cycle through reflections every 5 seconds
        setInterval(displayReflection, 5000);

        // Initial reflection display
        displayReflection();
    </script>  
      </main>
      <Footer />
    </div>
  )
}
