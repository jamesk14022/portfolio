{{ $base 	:= .Site.Params.cl_image_base }}
{{ $image 	:= .Get "image" }}
<hr>
<section class="project image">
		<figure class="animated-card">
			<img
				src="{{ $base }}{{ $image }}" 
				srcset="{{ $base }}{{ $image }} 1x, {{ $base }}{{ $image }} 2x"
				alt="Logo"
			/>
		</figure>
	<aside>
		{{ .Inner }}
	</aside>
</section>