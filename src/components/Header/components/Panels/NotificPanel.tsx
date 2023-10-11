const NotificPanel: React.FC = () => {
    return (
        <>
            <div
                className="popover-panel"
                id="notification-panel"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <p className="text-white mb-3 text-2xl">通知</p>
                <div className="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
                        <img
                            className="w-full object-cover"
                            src="https://bruce-fe-fb.web.app/image/avator.png"
                            alt=""
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-white mb-[2px]">布魯斯發佈了一門新課程！</p>
                        <p className="text-xs text-fb">1分鐘前</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificPanel
