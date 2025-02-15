// src/hooks/useGetFeedPosts.js
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetFeedPosts = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const postsQuery = query(
			collection(firestore, "posts"),
			orderBy("createdAt", "desc")
		);

		const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
			const fetchedPosts = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setPosts(fetchedPosts);
			setIsLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return { isLoading, posts };
};

export default useGetFeedPosts;
