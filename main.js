const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

const App = () => (
	<ReactRouterDOM.HashRouter>
		<div className="container-fluid navbar-custom-cont">
			<ul className="nav navbar">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/register">Register</Link></li>
				<li><Link to="/Contact">Contact</Link></li>
			</ul>
		</div>
		<Route path="/" exact component={Home} />
		<Route path="/login" component={Login} />
		<Route path="/register" component={Register} />
		<Route path="/Contact" component={Contact} />
	</ReactRouterDOM.HashRouter>
)

const Home = () =>
	<div className="container">
		<div className="row">
			<div class="col-lg-12 col-12 text-center">
				<h1>Home</h1>
				<p>LorenIPsum</p>
			</div>
		</div>
	</div>
const Login = () =>
	<div className="container">
		<div className="row">
			<div class="col-lg-12 col-12 text-center">
				<div class="form-group w-50 m-auto mb-5">
					<label for="exampleInputEmail1">Email address</label>
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
				</div>
				<div class="form-group w-50 m-auto mb-5">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div class="form-check w-25 m-auto mb-5">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
		</div>
	</div>
const Register = () =>
	<div className="container text-center">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr />
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<span class="fa fa-user"></span>
					</span>
				</div>
				<input type="text" class="form-control" name="username" placeholder="Username" required="required" />
			</div>
		</div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-paper-plane"></i>
					</span>
				</div>
				<input type="email" class="form-control" name="email" placeholder="Email Address" required="required" />
			</div>
		</div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-lock"></i>
					</span>
				</div>
				<input type="text" class="form-control" name="password" placeholder="Password" required="required" />
			</div>
		</div>
		<div class="form-group">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text">
						<i class="fa fa-lock"></i>
						<i class="fa fa-check"></i>
					</span>
				</div>
				<input type="text" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
			</div>
		</div>
		<div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
		</div>
	</div>

const Contact = () =>
	<div className="container">
		<div className="row">
			<div class="col-lg-12 col-12 text-center">
				<iframe class="w-100" height="1000" src="https://us7.list-manage.com/contact-form?u=eeeb826235b9863109b1a2698&form_id=6081e31976af88b979a1052c04281408"></iframe>
			</div>
		</div>
	</div>

ReactDOM.render(<App />, document.querySelector('#root'));
window.onload = function view() {
	var url = "";
	$.ajax({
		type: "POST",
		url: url + "/GetHomePage",
		success: OnSuccessCall
	});
}
function OnSuccessCall(response) {
	console.log(response);
}