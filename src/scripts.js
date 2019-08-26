let randomId = Math.floor(Math.random() * 50 + 1);
let userRepository = new UserRepository(userData);
let userInfo = userRepository.getUserData(randomId);
let user = new User(userInfo);
let hydrationRepository = new HydrationRepository(hydrationData);
let userHydrationInfo = hydrationRepository.getUserById(randomId);
let hydration = new Hydration(userHydrationInfo);
let activityRepository = new ActivityRepository(activityData);
let userActivityInfo = activityRepository.getUserById(randomId);
let activity = new Activity(userActivityInfo, user);


$(document).ready(() => {
	$('#splash-page-js').show();
	$('#main-page-js').hide();
	$('#header-js').hide();
	$('#enter__button-js').click(hideSplash)
	function hideSplash() {
		$('#splash-page-js').fadeOut(2000);
		$('#splash-page-js').hide();
		$('#main-page-js').fadeIn(1000);
		$('#header-js').show();
	}
	$('#user-name__display').text(user.name);
	$('#user-address__display').text(user.address);
	$('#user-email__display').text(user.email);
	$('#user-stride__display').text(user.strideLength);
	$('#user-step__display').text(user.dailyStepGoal);

	//**********Hydration
	$('#user-hydration-all-time__display-js').text(`Average ounces consumed: ${hydration.getAverageOuncesPerDayAllTime()}oz`);
	$('#user-hydration-by-date__display-js').text(`Ounces consumed today: ${hydration.getOuncesByDate('2019/06/15')}oz`);
	$('#user-hydration-by-week__display-js').text(`Weekly Hydration: ${hydration.getOuncesByWeek('2019/06/15')}`);
	//function to 

//*************Activity
	$('#user-steps-goal__display-js').text(`Step goal reached today: ${activity.getStepGoalByDay('2019/06/15')}!`);
	$('#user-minutes-today__display-js').text(`Minutes active today: ${activity.getMinutesActivePerDayByDate('2019/06/15')}`);
	$('#user-number-steps-today__display-js').text(`Todays step count: ${activity.getStepsPerDay('2019/06/15')}`);
	$('#user-distance-lasest-day-step-count__display-js').text(`Todays miles: ${activity.getDistanceBasedOnStepCountAndDay('2019/06/15')}`);
	
});
