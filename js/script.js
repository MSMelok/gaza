function updateCounter() {
        const startDate = new Date("2023-10-07T00:00:00");
            const now = new Date();
                const diffInMs = now - startDate;
                    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
                        document.getElementById("dayCounter").innerText = days;
                        }

                        // Update the counter immediately, then every hour
                        updateCounter();
                        setInterval(updateCounter, 60 * 60 * 1000);