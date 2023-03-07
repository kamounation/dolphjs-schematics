import { Request, Response } from 'express';
import { AppRes, catchAsync, httpStatus } from '@dolphjs/core';

class DemoAppController {
	public sendGreeting = catchAsync(async (req: Request, res: Response) => {
		const message =
			'Welcome to the API end-point for the Dolph app. If you have problems getting started, visit https://github.com/dolphjs/dolph-examples#README.MD';
		res.status(httpStatus.OK).json({ message });
	});
}

export default DemoAppController;
