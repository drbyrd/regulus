@extends('main-three')

@section('content')

<div class="container">
	<div id="content">
		<form class="form-horizontal" action="submit" method="post"  id="contact_form">
<fieldset>

<legend>Book Meta Form!</legend>

<div class="form-group">
	<label class="col-md-4 control-label">Book ID</label>
	<div class="col-md-4 inputGroupContainer">
	<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-book"></i></span>
	<input  name="first_name" placeholder="Book ID" class="form-control"  type="text">
		</div>
	</div>
</div>


<div class="form-group">
	<label class="col-md-4 control-label">Book Title</label>
	<div class="col-md-4 inputGroupContainer">
	<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-book"></i></span>
	<input  name="first_name" placeholder="Book Title" class="form-control"  type="text">
		</div>
	</div>
</div>
<hr>
<div class="form-group">
	<label class="col-md-4 control-label" >Author Name</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
	<input name="last_name" placeholder="Author Name" class="form-control"  type="text">
		</div>
	</div>
</div>

<div class="form-group">
	<label class="col-md-4 control-label" >Author ID</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
	<input name="last_name" placeholder="Author ID" class="form-control"  type="text">
		</div>
	</div>
</div>
<hr>
<!-- Text input-->
			 <div class="form-group">
	<label class="col-md-4 control-label">Book Discription</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
	<input name="email" placeholder="Book Discription" class="form-control"  type="text">
		</div>
	</div>
</div>
<hr>
<div class="form-group">
	<label class="col-md-4 control-label">Book Source</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-eye-open"></i></span>
	<input name="phone" placeholder="Book Source" class="form-control" type="text">
		</div>
	</div>
</div>

<div class="form-group">
	<label class="col-md-4 control-label">Source URL</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
	<input name="address" placeholder="Source URL" class="form-control" type="text">
		</div>
	</div>
</div>
<hr>
<div class="form-group">
	<label class="col-md-4 control-label">Book Publisher</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-bookmark"></i></span>
	<input name="city" placeholder="Book Publisher" class="form-control"  type="text">
		</div>
	</div>
</div>
<hr>


<div class="form-group">
	<label class="col-md-4 control-label">Book Edition</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-asterisk"></i></span>
	<input name="zip" placeholder="Book Edition" class="form-control"  type="text">
		</div>
</div>
</div>
<hr>
<div class="form-group">
	<label class="col-md-4 control-label">Book ISBN</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-barcode"></i></span>
	<input name="zip" placeholder="Book ISBN" class="form-control"  type="text">
		</div>
</div>
</div>


<hr>
<div class="form-group">
	<label class="col-md-4 control-label">Book Topic</label>
		<div class="col-md-4 selectContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
		<select name="state" class="form-control selectpicker" >
			<option value=" " >Select a Topic</option>
			<option>Alchemy and Mysticism</option>
			<option>Astrology and Divination</option>
			<option>Demons, Angels and Spirits</option>
			<option>Disasters and Forces of Nature</option>
			<option>Enigmas and Curiosities</option>
			<option>Lost Worlds, Ancient Peoples and Mysteries</option>
	  	<option>Magic, Voodoo and Witchcraft</option>
		 	<option>Mysteries of the Deep</option>
			<option>Mysterious Creatures</option>
			<option>Myths, Heroes and Legends</option>
			<option>Pseudoscience, Powers of Healing and Wellness</option>
			<option>Psychic Powers and the Mind</option>
			<option>Religous Mysteries</option>
			<option>Secret Societies, Sects, and Cults</option>
			<option>Strange and Occult People</option>
			<option>Superstitions and Strange Customs</option>
			<option>Ufos and Extraterrestrials</option>
			<option>Universe, Time and Space</option>
		</select>
	</div>
</div>
</div>


<div class="form-group">
	<label class="col-md-4 control-label">Tags</label>
	 <div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-tags"></i></span>
	<input name="website" placeholder="Tags" class="form-control" type="text">
		</div>
	</div>
</div>

<hr>

<div class="form-group">
	<label class="col-md-4 control-label">Book URI</label>
	 <div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
	<input name="website" placeholder="Book URI" class="form-control" type="text">
		</div>
	</div>
</div>

<hr>



<div class="form-group">
	<label class="col-md-4 control-label">Publication Date</label>
	 <div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	<input name="website" placeholder="Publication Date" class="form-control" type="text">
		</div>
	</div>
</div>

<hr>

<div class="form-group">
	<label class="col-md-4 control-label">Image</label>
	 <div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
<input id="input-1" type="file" class="file">
</div>
</div>
</div>



<hr>

<div class="form-group">
	<label class="col-md-4 control-label">Date Recorded</label>
	 <div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
	<input name="website" placeholder="Date Recorded" class="form-control" type="text">
		</div>
	</div>
</div>

<hr>

<!-- Success message -->
<div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Thanks for contacting us, we will get back to you shortly.</div>

<div class="form-group">
	<label class="col-md-4 control-label"></label>
	<div class="col-md-4">
		<button type="submit" class="btn btn-warning" >Send <span class="glyphicon glyphicon-send"></span></button>
	</div>
</div>

</fieldset>
</form>


</div>


	</div><!-- content -->

</main>


@endsection
