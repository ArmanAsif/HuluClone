import {
	HomeIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import IconHeader from "./IconHeader";

const Header = () => {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<IconHeader title="HOME" Icon={HomeIcon} />
				<IconHeader title="TRENDING" Icon={LightningBoltIcon} />
				<IconHeader title="VERIFIED" Icon={BadgeCheckIcon} />
				<IconHeader title="COLLECTIONS" Icon={CollectionIcon} />
				<IconHeader title="SEARCH" Icon={SearchIcon} />
				<IconHeader title="ACCOUNT" Icon={UserIcon} />
			</div>

			<Image
				className="object-contain"
				src="https://links.papareact.com/ua6"
				width={200}
				height={100}
			/>
		</header>
	);
};

export default Header;
