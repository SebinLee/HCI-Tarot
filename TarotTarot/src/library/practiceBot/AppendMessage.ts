export default function AppendMessage(setserverData, setMessage) {
    const interval = setInterval(() => {
        setserverData((prevData) => {
            setMessage((prevMessage) => {
                // Append Data
                if (prevMessage.length < prevData.chats.length) {
                    const dataToAppend = {
                        _id: Date.now(),
                        text: prevData.chats[prevMessage.length],
                        createdAt: Date.now(),
                        user: {
                            _id: "system",
                            name: "연애봇",
                        },
                    };

                    return [...prevMessage, dataToAppend];
                }

                return [...prevMessage];
            });
            return { ...prevData };
        });
    }, 500);

    return interval;
}
