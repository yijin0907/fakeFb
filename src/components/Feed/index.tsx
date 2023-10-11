import Booth from './components/Booth'
import LoadingPost from './components/LoadingPost'
import Posts from './components/Posts'
import StoryList from './components/StoryList'
import ThinkingList from './components/ThinkingList'

const Feed: React.FC = () => {
    return (
        <>
            <div className="max-w-[744px] w-full mx-auto px-4 pb-4">
                <StoryList />
                <ThinkingList />
                <Booth />
                <Posts />
                <LoadingPost />
            </div>
        </>
    )
}

export default Feed
