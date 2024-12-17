import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedPostProps {
	title: string;
	excerpt: string;
	slug: string;
	coverImage?: string;
	date: string;
	author: {
		name: string;
		image?: string;
	};
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
	title,
	excerpt,
	slug,
	coverImage,
	date,
	author,
}) => {
	return (
		<div className="relative group cursor-pointer">
			<div className="relative h-80 w-full mb-4 overflow-hidden rounded-lg">
				{coverImage && (
					<Image
						src={coverImage}
						alt={title}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				)}
			</div>
			<div className="space-y-3">
				<div className="flex items-center space-x-3">
					{author.image && (
						<Image
							src={author.image}
							alt={author.name}
							width={40}
							height={40}
							className="rounded-full"
						/>
					)}
					<div>
						<p className="text-sm font-medium text-gray-900">{author.name}</p>
						<p className="text-sm text-gray-500">{date}</p>
					</div>
				</div>
				<Link href={`/blog/${slug}`}>
					<h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
						{title}
					</h3>
				</Link>
				<p className="text-gray-600 line-clamp-3">{excerpt}</p>
				<Link
					href={`/blog/${slug}`}
					className="inline-flex items-center text-blue-600 hover:text-blue-800"
				>
					Read more
					<svg
						className="ml-2 w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default FeaturedPost;