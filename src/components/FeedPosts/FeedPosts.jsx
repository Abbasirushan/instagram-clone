// 



// src/components/FeedPosts.js
import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
	const { isLoading, posts } = useGetFeedPosts();

	return (
		<Container maxW={"container.sm"} py={10} px={2}>
			{isLoading && [0, 1, 2].map((_, idx) => (
				<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
					<Skeleton height='10px' w={"200px"} />
					<Skeleton w={"full"} h={"400px"} />
				</VStack>
			))}

			{!isLoading && posts.map((post) => <FeedPost key={post.id} post={post} />)}
		</Container>
	);
};

export default FeedPosts;
