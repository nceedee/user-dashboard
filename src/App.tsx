
function App() {
  return (
		<div className="font-poppins text-[13px] leading-relaxed text-[#222] bg-[#f8f8f8] font-normal h-full">
			<div className="bg-[#f8f8f8] md:py-6">
				<section id="signup " className=" ">
					<div className="shadow-lg rounded-xl max-w-full w-[calc(100%-30px)] bg-[#fff] m-auto md:w-[900px] lg:max-w-7xl">
						<div className="justify-center md:flex-row flex-col py-[75px] flex">
							<div className="w-auto md:w-1/2 overflow-hidden md:mx-[70px] md:pl-[34px] px-[30px] md:px-0">
								<h2 className="text-center text-4xl text-[#222] leading-relaxed font-black md:text-left mb-[33px]">
									Signup
								</h2>
								<form method="POST" className="w-full" id="register-form">
									<div className="relative mb-6 overflow-hidden">
										<label htmlFor="name">
											<i className="fas fa-user"></i>
										</label>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Your Name"
										/>
									</div>
									<div className="relative mb-6 overflow-hidden">
										<label  htmlFor="email">
											<i className="fas fa-envelope"></i>
										</label>
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Your Email"
										/>
									</div>
									<div className="relative mb-6 overflow-hidden">
										<label  htmlFor="pass">
											<i className="fas fa-lock"></i>
										</label>
										<input
											type="password"
											name="pass"
											id="pass"
											placeholder="Password"
										/>
									</div>
									<div className="relative mb-6 overflow-hidden">
										<label  htmlFor="re-pass">
											<i className="fas fa-user-lock"></i>
										</label>
										<input
											type="password"
											name="re_pass"
											id="re_pass"
											placeholder="Repeat your password"
										/>
									</div>
									<div className="relative mb-6 overflow-hidden">
										<input
											type="checkbox"
											name="agree-term"
											id="agree-term"
											className="inline-block w-auto"
										/>
										<label
											 htmlFor="agree-term"
											className="relative top-0 translate-y-0 text-xs">
											<span>
												{" "}
												<span> </span>
											</span>
											I agree all statements in
											<a href="#" className="text-sm text-[#222]">
												Terms of service
											</a>
										</label>
									</div>
									<div className="relative mb-6 overflow-hidden flex justify-center md:justify-start form-button">
										<input
											type="submit"
											name="signup"
											id="signup"
											className="hover:bg-[#4292dc] inline-block bg-[#6dabe4] text-white border-b-0 w-auto py-3 px-9 rounded mt-6 cursor-pointer"
											value="Register"
										/>
									</div>
								</form>
							</div>
							<div className="signup-image w-auto md:w-1/2 mx-[55px] mt-[45px] overflow-hidden">
								<figure className="m-0 mb-12 text-center">
									<img
										className="max-w-full h-auto"
										src="../assets/images/signup-image.jpg"
										alt="sing up image"
									/>
								</figure>

								<a href="./signin.html" className="text-[#222] text-center text-sm">
									I am already member
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
			<script src="./bundle.js"></script>
		</div>
	);
}

export default App;
