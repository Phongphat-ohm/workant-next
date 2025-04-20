export default function Signin() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center p-5">
                <div className="p-8 px-5 min-w-80 w-full max-w-96">
                    <div className="text-center">
                        <h1 className="text-2xl text-blue-500 font-bold">
                            EZBANK
                        </h1>
                        <label className="text-gray-400">ระบบธนาคารออนใลน์</label>
                    </div>
                    <form action="/manage" className="flex flex-col w-full">
                        <div className="flex flex-col w-full mt-5">
                            <div className="flex items-center gap-1">
                                <label>อีเมลของคุณ</label>
                                <label className="text-red-500">*</label>
                            </div>
                            <input type="text" name="email" id="email" className="inp_ant mt-2" autoComplete="off" placeholder="กรอกอีเมล" />
                            <button type="button" className="p-3 mt-5 text-white text-sm rounded-lg bg-blue-500 active:bg-blue-600 cursor-pointer">
                                ต่อไป
                            </button>
                        </div>
                    </form>
                    <hr className="my-4 text-gray-100" />
                    <div className="flex flex-col gap-4">
                        <button className="signin-btn">
                            <img src="/images/brand_logo/google.png" className="w-4" alt="google logo" />
                            <label>
                                Continue with Google
                            </label>
                        </button>
                        <button className="signin-btn">
                            <img src="/images/brand_logo/microsoft.png" className="w-4" alt="google logo" />
                            <label>
                                Continue with Microsoft
                            </label>
                        </button>
                        <button className="signin-btn">
                            <img src="/images/brand_logo/apple.png" className="w-4" alt="google logo" />
                            <label>
                                Continue with Apple
                            </label>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}