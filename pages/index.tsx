import { Layout, Text, Page, } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex text-center flex-col gap-6">
        <Text variant="h1">Talk to Leela</Text>
        <div className="text-center" ><img className="center" src="/leelawag.gif" width={200}  /></div>
      </section>

      <section className="flex flex-col gap-3">
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
