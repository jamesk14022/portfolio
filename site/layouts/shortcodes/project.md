{{ $base := .Site.Params.cl_image_base }}
{{ $image1 := .Get "image1" }}
{{ $image2 := .Get "image2" }}
{{ $image3 := .Get "image3" }}
{{ $image4 := .Get "image4" }}

<hr>
<section class="project image">
	<div>
	<dl id="simple-gallery">
	  <dt tabindex="1">
	   <img src="{{ $image1 }}" />
	  </dt>
	  <dd id="img1"><img src="{{ $image1 }}"></dd>
	  <dt tabindex="2"><img src="{{ $image2 }}"></dt>
	    <dd id="img2"><img src="{{ $image2 }}">
	  <dt tabindex="3"><img src="{{ $image3 }}"></dt>
	    <dd id="img3"><img src="{{ $image3 }}"></dd>
	  <dt tabindex="4"><img src="{{ $image4 }}"></dt>
	  <dd  id="img4"><img src="{{ $image4 }}"></dd>
	 </dl>
	</div>
	<aside>
		{{ .Inner }}
	</aside>
</section>