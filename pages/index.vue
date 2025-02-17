<template>
    <div class="flex items-center justify-between px-5 py-3 w-full font-[Open_Sans]">
      <!--logo image-->
       <div class="shrink-0 h-11 w-auto lg:h-14">
         <img src="C:\Users\HP\myproject\assets\images\img10.png" class="w-full h-full object-contain" />
       </div>
   
       <!-- Dropdown Button -->
       <div class="relative inline-block h-full object-contain">
         <button 
           @click="toggleDropdown"
           class="bg-black text-white px-3 py-2 text-sm border-none rounded-lg cursor-pointer hover:bg-gray-900 transition-all"
         >
           Choose a color
         </button>
   
         <div v-if="isOpen" class="absolute left-0 mt-2 bg-purple-200 min-w-[170px] shadow-lg z-10 rounded-lg p-3">
           <input type="color" v-model="selectedColor" class="w-full cursor-pointer" /><br><br>
           <button @click="applyColor" class="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">Apply Color</button>
         </div>
       </div>
   
      <!--Sign up Button-->
     
  <button
  @click="login"
    type="button"
    class="bg-black text-white px-3 py-2 text-sm border-none rounded-lg cursor-pointer hover:bg-gray-900 transition-all"
  >
    Sign In
  </button>
</div>
  
   <!--Div one after header-->
   <div class="relative bg-cover bg-center min-h-screen flex flex-col items-start justify-center px-8 md:px-16 bg-[url(/assets/images/hero_img.png)]" >
     
     <!-- DIV ONE -->
     <div class="absolute inset-0 font-[Open_Sans"></div>
     <div class="relative z-10 text-left text-white max-w-3xl w-full font-[Open_Sans]">
     
       <h1 class=" text-4xl font-semibold my-2">
         May-July
       </h1>
       <p class="text-2xl lg:text-5xl font-semibold lg:leading-[1.5] my-4 tracking-normal">
         Write a captivating header here to engage your customers
       </p>
       <p class="text-base font-normal leading-[1.5] mt-4">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
         Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
         consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
         Vestibulum auctor ornare leo, non suscipit magna interdum eu.
       </p>
   
       <!-- Button -->
       <div class="mt-6">
         <button class="px-5 py-2 text-3xl font-semibold  bg-white text-purple-700 border-none rounded-full cursor-pointer hover:bg-gray-100 transition-all" :style="computedTextColor">
         CALL TO ACTION
       </button>
       </div>
   
     </div>
   </div>
   
   <!--2nd div form and words-->
   <div class="flex flex-col md:flex-row items-start justify-between p-10 bg-white font-[Open_Sans]">
     <!-- Left Section-->
     <div class="md:w-1/2">
       <h1 class="text-5xl font-normal text-black text-left">Subscribe to our mailing list </h1>
       
     </div>
   
     <!-- Right Section:Form -->
     <div class="md:w-1/2 mt-8 md:mt-0">
       <p class="text-base text-black">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
         Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
         ligula consectetur, ultrices mauris. Maecenas vitae mattis.
       </p>
       <form class="space-y-6">
         <!-- Name Input -->
         <div>
       
           <label for="name" class="block text-sm font-medium text-black mb-2">Name</label>
           
           <input
           type="text"
           class="w-full px-3 py-2  text-base font-normal text-white border-b border-gray-800 outline-none bg-transparent box-border"
         />
   
         </div>
   
         <!-- Email Input -->
         <div>
           <label for="email" class="block text-sm font-medium text-black mb-2">Email</label>
           <input
             type="email"
             class="w-full px-3 py-2  text-base font-normal text-white border-b border-gray-800 outline-none bg-transparent box-border"
           />
   
         </div>
   
         <!-- Button -->
         <div>
           <button
             type="submit"
             class="bg-black text-white py-3 px-6 rounded-full w-full md:w-auto hover:bg-gray-800 transition-all"
           >
             Call to action
           </button>
         </div>
       </form>
     </div>
   </div>
   
       <!--purple div image right wording left-->
   <div class="flex flex-col md:flex-row items-center justify-between bg-purple-700 text-white p-10 font-[Open_Sans]" :style="computedBackgroundColor"
   >
     <!-- Left Section -->
     <div class="md:w-1/2 space-y-6">
       <p class=" text-5xl font-semibold leading-[1.5] my-4 mb-7 tracking-normal">
         Write a captivating header here to engage your customers
       </p>
       <button class="px-5 py-2 text-3xl font-semibold  bg-white text-purple-700 border-none rounded-full cursor-pointer hover:bg-gray-100 transition-all" :style="computedTextColor">
         CALL TO ACTION
       </button>
     </div>
   
     <!-- Right Section -->
     <div class="md:w-1/2 mt-8 md:mt-0">
       <img
         src="C:\Users\HP\myproject\assets\images\img2.png"
         alt="Audience Image"
         class="w-full rounded-lg object-cover"
       />
     </div>
   </div>
   
   <!--white div image and wording-->
   <div class="flex flex-col md:flex-row items-center justify-between p-10 bg-white gap-10 md:gap-20">
     <!-- Left Section -->
     <div class="md:w-1/2">
       <img
         src="C:\Users\HP\myproject\assets\images\img3.png"
         alt="Auditorium"
         class="w-full rounded-lg object-cover"
       />
     </div>
   
     <!-- Right Section -->
     <div class="md:w-1/2 mt-8 md:mt-0 text-left space-y-6 font-[Open_Sans]">
       <h1 class=" text-5xl font-normal text-black leading-[1.5] my-4 text-left">
         Write a captivating header here
       </h1>
       <p class="font-open-sans text-base font-normal text-gray-800 leading-[1.5] my-4 text-left">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
         Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis.
       </p>
       <button class="px-5 py-2 text-3xl font-semibold bg-purple-700 text-white border-none rounded-full cursor-pointer max-w-[350px] hover:bg-purple-800 transition-all" :style="computedBackgroundColor">
         CALL TO ACTION
       </button>
     </div>
   </div>
   
   <!--Fully colored div-->
   <div class="bg-purple-700 text-white p-10 font-[Open_Sans]" :style="computedBackgroundColor"
   >
     <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
       <!-- Card 1 left-->
       <div class="text-left font-normal">
         <h class="text-5xl">Number 01</h>
         <p class=" text-base  leading-[1.5] my-4">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
           Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
           consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
           augue. Vestibulum.
         </p>
       </div>
       <!-- Card 2 right-->
       <div class="font-normal text-left">
         <h2 class="text-5xl ">Number 02</h2>
         <p class="text-base  leading-[1.5] my-4">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
           Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
           consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
           augue. Vestibulum.
         </p>
       </div>
     </div>
     <!--Button where div fully colored -->
     <div class="mt-10 flex justify-left">
       <button class="px-6 py-3 bg-white text-purple-700 text-base font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all" :style="computedTextColor">
         CALL TO ACTION
       </button>
     </div>
   </div>
   
   <!--Container for speakers-->
   <div class="bg-white p-10 text-center font-[Open_Sans]">
     <!-- Speaker Cards -->
     <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center mb-10">
       <!-- Speaker 1 -->
       <div class="flex flex-col items-center">
         <img
           src="C:\Users\HP\myproject\assets\images\img4.png"
           alt="Speaker Name"
           class="w-32 h-32 rounded-lg object-cover mb-4"
         />
         <p class="text-5xl font-normal text-black leading-[1.5] text-left">Speaker Name</p>
         <p class="text-xl font-bold text-black leading-[1.5]  text-center">Lorem ipsum dolor</p>
         <p class="text-xl font-normal text-black leading-[1.5] text-center">Lorem ipsum dolor</p>
       </div>
   
       <!-- Speaker 2 -->
       <div class="flex flex-col items-center">
         <img
           src="C:\Users\HP\myproject\assets\images\img5.png"
           alt="Speaker Name"
           class="w-32 h-32 rounded-lg object-cover mb-4"
         />
         <p class=" text-5xl font-normal text-black leading-[1.5] text-left">Speaker Name</p>
         <p class="text-xl font-bold text-black leading-[1.5]  text-center">Lorem ipsum dolor</p>
         <p class="text-xl font-normal text-black leading-[1.5] text-center">Lorem ipsum dolor</p>
       </div>
     </div>
     <p class="text-5xl font-normal text-black leading-[1.5] my-4 text-center">
       Write a captivating header here to engage your customers
     </p>
     <button class="px-5 py-2 text-3xl font-semibold bg-purple-700 text-white border-none rounded-full cursor-pointer max-w-[350px] hover:bg-purple-800 transition-all" :style="computedBackgroundColor">
       CALL TO ACTION
     </button>
   </div>
   <!--footer-->
     <div class="flex justify-between px-5 py-3">
       <div class="w-32 h-32">
       <img src="C:\Users\HP\myproject\assets\images\img10.png" class="w-full h-full object-contain" />
     </div>      
          <div class="w-32 h-32">
       <img src="C:\Users\HP\myproject\assets\images\img8.png" class="w-full h-full object-contain" />
     </div>   
         </div>
   </template>
   
   
   <script setup>
  import { ref, computed, onMounted } from "vue";
  import axios from 'axios';

  const isOpen = ref(false);
  const selectedColor = ref("#7717D7"); 
  
  // update the background color
  const computedBackgroundColor = computed(() => {
    return { backgroundColor: selectedColor.value };
  });
  
  // update the text color
  const computedTextColor = computed(() => {
    return { color: selectedColor.value };
  });
  
  // dropdown
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  // Apply the selected color when button is clicked
  const applyColor = () => {
    if (!isNearWhite(selectedColor.value)) {
      localStorage.setItem("selectedColor", selectedColor.value);
      isOpen.value = false; // Close dropdown
    } else {
      alert("Please select a darker color. White and near-white colors are not allowed.");
    }
  };
  
  // Check if the color is near-white
  const isNearWhite = (color) => {
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    const brightness = r * 0.299 + g * 0.587 + b * 0.114;
    return brightness > 200; 
  };
  
  // Load saved color from localStorage when the page loads
  onMounted(() => {
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      selectedColor.value = savedColor;
    }
  });
  
//login button to go to authurl
  const login = async () => {
  try {
    const response = await axios.get('/api/auth/login');
    const { authUrl } = response.data;
    window.location.href = authUrl;
  } catch (error) {
    console.error('Error during login:', error);
  }
};
 
  </script>
  