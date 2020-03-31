const right = document.querySelector('.right');
const prev = document.querySelector('.left');
const sumeet = document.querySelector('.sumeet');

// const nextView = () => {
// 	for(i=0;i<next.length; i++){
// 		next[i].addEventListener('click',() => {
// 			container.classList.add('creator-view');
// 			container.classList.add('mentor-view');
// 			container.classList.add('investor-view');
// 		});
// 	}
	
// };

// next.addEventListener('click', () => {
// 	nextView();
// });

var counter=1;


right.addEventListener('click',()=>
{



  
  if(counter === 1)
  {
  	
  	sumeet.classList.add("creator-view");
  	counter++;
  }
  else if(counter === 2)
  {
  	
  	sumeet.classList.add("mentor-view");
  	counter++;
  }

else
{
	
  	sumeet.classList.add("investor-view");
}

}

)

// sumeet.classList.add('creator-view');



	
	

