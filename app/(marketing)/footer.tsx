import Image from "next/image";

import { Button } from '@/components/ui/button';

const Footer = () => {
    return (
        <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/en.svg"
                        alt="English"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    English
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/es.svg"
                        alt="Spanish"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Spanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/fr.svg"
                        alt="French"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/it.svg"
                        alt="Italian"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Italian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/de.svg"
                        alt="German"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    German
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image
                        src="/jp.svg"
                        alt="Japanese"
                        height={32}
                        width={40}
                        className="mr-4 rounded-md"
                    />
                    Japanese
                </Button>
            </div>
        </footer>
    );
};

export default Footer;
