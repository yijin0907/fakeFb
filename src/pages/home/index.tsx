import ContactList from '../../components/ContactList'
import Feed from '../../components/Feed'
import Header from '../../components/Header'
import Information from '../../components/Information'

const Home: React.FC = () => {
    return (
        <>
            <div className="bg-fb-bg">
                <Header />
                <main className="min-h-[100vh] pt-main-span flex">
                    <Information />
                    <Feed />
                    <ContactList />
                </main>
            </div>
        </>
    )
}

export default Home
