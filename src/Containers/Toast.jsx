import React, { useEffect } from 'react';

function Toast() {
    useEffect(() => {
        const toastElement = document.getElementById('liveToast');
        const toast = new window.bootstrap.Toast(toastElement);

        const updateMessage = (message, messageHeader) => {
            const messageElement = document.getElementById('message');
            const messageHeaderele = document.getElementById("messageHeader");
            if (messageElement && messageHeaderele) {
                messageElement.innerText = message;
                messageHeaderele.innerText = messageHeader;
                toast.show();
            }
        };

        const handleOnline = () => updateMessage("You are online now!", "Internet Access");
        const handleOffline = () => updateMessage("Please! Check your internet connection.", "Internet Issue");

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Clean up event listeners on component unmount
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
            <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto" id='messageHeader'>Internet Issue</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body" id="message">
                    Please! Check your internet connection.
                </div>
            </div>
        </div>
    );
}

export default Toast;
