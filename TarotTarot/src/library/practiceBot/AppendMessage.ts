export default function AppendMessage(setMessageData, setMessage) {
    const interval = setInterval(() => {
        setMessageData((prevData) => {
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
    }, 2000);

    return interval;
}
