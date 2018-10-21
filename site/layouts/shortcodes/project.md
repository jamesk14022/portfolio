{{ $base := .Site.Params.cl_image_base }}
{{ $index := .Get "index" }}

<hr>
<section class="project image">
	<div class='gallery' name='gallery{{ $index }}' id='gallery{{ $index }}'>
	  <img class='full-size-image' />
	  <div id="thumbnails">
		<img name='thumb0' class='thumb' />		
		<img name='thumb1' class='thumb' />
		<img name='thumb2' class='thumb' />
		<img name='thumb3' class='thumb' />
	  </div>
	</div>
	<aside>
		{{ .Inner }}
	</aside>
</section>


