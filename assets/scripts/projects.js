var state = [
  {
    images: [
      { url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131793/portfolio/areascout/as1.png"},
      { url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131793/portfolio/areascout/as2.png"},
      { url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131792/portfolio/areascout/as3.png"},
      { url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131792/portfolio/areascout/as4.png"},
      { url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131792/portfolio/areascout/as5.png"}
    ],
    thumbnails: []
  },
  {
    images: [
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131198/portfolio/harmhunt/g5.png"},
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131192/portfolio/harmhunt/g4.png"},
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131194/portfolio/harmhunt/gh1.png"},
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131192/portfolio/harmhunt/gh2.png"},
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540131193/portfolio/harmhunt/gh3.png"}
    ],
    thumbnails: []
  },
  {
    images: [
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540130218/portfolio/3d-loader/stluploader6.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540129470/portfolio/3d-loader/stl-upload-2.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540130218/portfolio/3d-loader/stluploader3.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540130218/portfolio/3d-loader/stluploader5.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540130218/portfolio/3d-loader/stluploader5.png" }
    ],
    thumbnails: []
  },
  {
    images: [
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540212770/portfolio/wpPluginDev/Screen_Shot_2017-07-20_at_14.29.05.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540212771/portfolio/wpPluginDev/Screen_Shot_2017-07-20_at_22.25.06.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540212770/portfolio/wpPluginDev/Screen_Shot_2017-07-20_at_22.24.46.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540212740/portfolio/wpPluginDev/Screen_Shot_2017-07-10_at_21.01.30.png" }, 
      {  url: "https://res.cloudinary.com/hccxvb0bt/image/upload/v1540212740/portfolio/wpPluginDev/Screen_Shot_2017-07-10_at_21.05.37.png" }
    ],
    thumbnails: []
  }
];

//takes a galleryIndex and array of thumb elements, thumb elements to be set are implicit in state
const setThumbImages = (galleryIndex) => {
  let thumbs = state[galleryIndex].thumbnails;
  thumbs.map((thumb, index) => {
    thumb.src = state[galleryIndex].images[index].url;
    if(thumb.addEventListener){
      thumb.addEventListener('click', onThumbClick, false);
    }else{
      thumb.attachEvent('onclick', onThumbClick);
    }
  }); 
}

const setFullImage = (fullSizeImage, src) => {
  console.log(src)
  console.log(fullSizeImage)
  fullSizeImage.src = src;
}

const onThumbClick = (event) => {
  let thumb = event.target;
  let thumbGallery = closest(thumb, '.gallery');

  if(!thumbGallery || !thumb){
    console.log('Error finding parent gallery of thumb');
  }else{
    //retrieve index of thumbnail within gallery, these are hardcoded into name attributes
    let thumbName = thumb.attributes['name'].value; 
    let thumbGalleryName = thumbGallery.attributes['name'].value; 

    let thumbIndex = parseInt(thumbName.substring(5, thumbName.length));
    let galleryIndex = parseInt(thumbGalleryName.substring(7, thumbGalleryName.length));

    console.log(thumbIndex, galleryIndex);
    setFullImage(thumbGallery.querySelector('.full-size-image'), state[galleryIndex].images[thumbIndex].url);
  }
} 

const closest = (el, selector) => {
  var matchesFn;

  // find vendor prefix
  ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
      if (typeof document.body[fn] == 'function') {
          matchesFn = fn;
          return true;
      }
      return false;
  })

  var parent;

  // traverse parents
  while (el) {
      parent = el.parentElement;
      if (parent && parent[matchesFn](selector)) {
          return parent;
      }
      el = parent;
  }

  return null;
}

var onProjectLoad = () => {
  let galleryRootElements = [document.querySelector('#gallery0'), document.querySelector('#gallery1'), document.querySelector('#gallery2'), document.querySelector('#gallery3')];
  
  galleryRootElements.map((gallery, galleryIndex) => {
    //load thumbnail elements and full size elements into state
    let fullSizeImage = gallery.querySelector('.full-size-image');
    let thumbnails = Array.from(gallery.querySelectorAll('.thumb'));
    state[galleryIndex].fullSizeImage = fullSizeImage;
    state[galleryIndex].thumbnails = thumbnails;

    //set initial content of thumbnails and full size image
    setFullImage(fullSizeImage, state[galleryIndex].images[0].url);
    setThumbImages(galleryIndex);
  });
}

export default onProjectLoad;

