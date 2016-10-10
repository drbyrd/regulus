@extends('main')

@section('relation', '../../')

@section('content')

<div class="container">
	<div id="content">
		<form class="form-horizontal" action="submit" method="post"  id="contact_form">
<fieldset>

<legend>Topic Add Form!</legend>

<div class="form-group">
	<label class="col-md-4 control-label">Topic ID</label>
	<div class="col-md-4 inputGroupContainer">
	<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
	<input  name="first_name" placeholder="Topic ID" class="form-control"  type="text">
		</div>
	</div>
</div>


<div class="form-group">
	<label class="col-md-4 control-label">Topic Name</label>
	<div class="col-md-4 inputGroupContainer">
	<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
	<input  name="first_name" placeholder="Topic Name" class="form-control"  type="text">
		</div>
	</div>
</div>
<hr>

<div class="form-group">
	<label class="col-md-4 control-label" >Topic Wikipedia</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
	<input name="last_name" placeholder="Topic Wikipedia" class="form-control"  type="text">
		</div>
	</div>
</div>


<div class="form-group">
	<label class="col-md-4 control-label" >Topic URI</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
	<span class="input-group-addon"><i class="glyphicon glyphicon-link"></i></span>
	<input name="last_name" placeholder="Author URI" class="form-control"  type="text">
		</div>
	</div>
</div>

<hr>
<!-- Text input-->
			 <div class="form-group">
	<label class="col-md-4 control-label">Topic Discription</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
	<input name="email" placeholder="Topic Discription" class="form-control"  type="text">
		</div>
	</div>
</div>

<hr>
<!-- Text input-->
			 <div class="form-group">
	<label class="col-md-4 control-label">Tags</label>
		<div class="col-md-4 inputGroupContainer">
		<div class="input-group">
				<span class="input-group-addon"><i class="glyphicon glyphicon-tags"></i></span>
	<input name="email" placeholder="Tags" class="form-control"  type="text">
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
