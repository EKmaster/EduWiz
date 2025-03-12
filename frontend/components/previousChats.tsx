"use client"
import { ScrollArea } from "@/components/ui/scroll-area";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface Chat {
    id: number,
    title: string
}
const getUserPastChats = async (): Promise<Chat[]> => {
    const s = { id: 12312, title: "Aerodynamics" };
    const r = { id: 133, title: "Pascal's triangle" };
    const t = { id: 9393, title: "Complex numbers" };
    return [s, r, t];
    // TODO: load past videos the user viewed here
}

const PreviousChats = ({ }: { userID: string }) => {
    const [previousChats, setPreviousChats] = useState<Chat[]>([]);
    const router = useRouter();

    useEffect(() => {
        const updatePrevChats = async () => {
            setPreviousChats(await getUserPastChats());
        }
        updatePrevChats();
    }, [])

    return (
        <main className="h-full">
            <ScrollArea className="h-full w-full">
                <ul>
                    {
                        previousChats.map((item, index) => (
                            <li key={index} className="mb-2">
                                {
                                    <Button
                                        className="h-full w-full justify-start bg-secondary text-foreground hover:bg-background border"
                                        onClick={() => {
                                            router.push("/")
                                        }}>
                                        {item.title}
                                    </Button>

                                }
                            </li>
                        ))
                    }
                </ul>
            </ScrollArea>
        </main>
    )
}

export default PreviousChats