import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";

import getConversations from "@/app/actions/getConversations";
import EmptyState from "@/app/components/EmptyState";
import Body from "./components/Body";
import Header from "./components/Header";
import Form from "./components/Form";

interface IParams {
    conversationId: string;
  }

const ChatId = async ({ params }: { params: IParams }) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);
    if(!conversation){
        return(
            <div className="g:pl-80 h-full">
                <div className="h-full flex flex-col">
                    <EmptyState />
                </div>
            </div>
        )
    }
    return ( 
        <div className="lg:pl-80 h-full">
          <div className="h-full flex flex-col">
            <Header conversation={conversation} />
            <Body initialMessages={messages} />
            <Form />
          </div>
        </div>
      );
}

export default ChatId;