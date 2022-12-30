import { FormEvent, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { createCommentsApi } from "../apis/createCommentApi";
import { getCommentsApi } from "../apis/getComments";
import { CommentResponse } from "../types/comment";
import { Loader } from "./Loader";
import { getBanglaDate } from "./utils/getBanglaDate";

const LIMIT = 10;

export default function Comments() {
    const [comment, setComment] = useState<string>('');
    const [comments, setComments] = useState<CommentResponse[]>([]);
    const [skip, setSkip] = useState(0);
    const [authError, setAuthError] = useState<{ flag: boolean, details: string[] }>({ flag: false, details: [] });
    const [loading, setLoading] = useState<'sendComment' | 'loadComments' | ''>('');
    const { postId } = useParams<string>();
    const lastCommentRef = useRef(null);

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setLoading('sendComment');
        createCommentsApi({ postId: postId || '', text: comment })
            .then((response) => {
                if (response.code === 200) {
                    setComments([...comments, response.data]);
                    setComment('')
                }
                setLoading('');
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(''))
    }

    useEffect(() => {
        setLoading('loadComments');
        getCommentsApi({ limit: LIMIT, skip, postId: postId || '' })
            .then((commentResponse) => {
                if (commentResponse.code === 200) {
                    for (let i = 0; i < commentResponse.data.length; i++) {
                        commentResponse.data[i].id = commentResponse.data[i]._id;
                    }
                    commentResponse.data.reverse();
                    setComments(commentResponse.data);
                }
                else {
                    setComments([]);
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(''));
    }, [skip]);

    return (
        <div className="m-2">
            <div className="max-h-96 overflow-scroll">
                {loading === 'loadComments' ? <Loader /> :
                    (<div className="m-1 mt-4 text-center h-fit bg-[#20BB96] rounded-lg">
                        <button type="button"
                            className="p-1.5 "
                            onClick={() => setSkip(skip + LIMIT)}
                        >
                            Show More
                        </button>
                    </div>)
                }
                {
                    comments?.map((comment, index) => (
                        <div
                            className="border rounded-lg m-2 p-2"
                            ref={(elem) => {
                                if (index === comments.length - 1) {
                                    // @ts-ignore
                                    lastCommentRef.current = elem;
                                    // @ts-ignore
                                    lastCommentRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            key={comment.id}
                        >
                            <div className="flex flex-row">
                                <div className="basis-1/4">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="18" fill="#EEFAFD" />
                                        <path d="M18 8C15.38 8 13.25 10.13 13.25 12.75C13.25 15.32 15.26 17.4 17.88 17.49C17.96 17.48 18.04 17.48 18.1 17.49C18.12 17.49 18.13 17.49 18.15 17.49C18.16 17.49 18.16 17.49 18.17 17.49C20.73 17.4 22.74 15.32 22.75 12.75C22.75 10.13 20.62 8 18 8Z" fill="#6299A9" />
                                        <path d="M23.08 20.1499C20.29 18.2899 15.74 18.2899 12.93 20.1499C11.66 20.9999 10.96 22.1499 10.96 23.3799C10.96 24.6099 11.66 25.7499 12.92 26.5899C14.32 27.5299 16.16 27.9999 18 27.9999C19.84 27.9999 21.68 27.5299 23.08 26.5899C24.34 25.7399 25.04 24.5999 25.04 23.3599C25.03 22.1299 24.34 20.9899 23.08 20.1499Z" fill="#6299A9" />
                                    </svg>
                                    <div className="flex">
                                        <p className="bg-[#E1FFF8] text-[#20BB96] text-[10px] mx-0.5 px-0.5 h-fit"> {comment.sender.userType === 'teacher' ? 'ফুজালা' : 'আবনা'}</p>
                                        <p className="bg-[#E1FFF8] text-[#20BB96] text-[10px] mx-0.5 px-0.5 h-fit"> {comment.sender.passingYear}</p>
                                    </div>

                                    <p className="text-xs mt-1"> {comment.sender.name}</p>
                                    <p className="text-[10px] mt-1"> {getBanglaDate(new Date(comment.createdAt))}</p>
                                </div>
                                <p className="basis-3/4  p-1">
                                    {comment.text}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <form className="m-2 w-full flex justify-center" action="#" onSubmit={handleSubmit}>
                <div className="m-1">
                    <textarea
                        name="comment"
                        value={comment}
                        onChange={(ev) => setComment(ev.target.value)}
                        className="border border-[#20BB96] p-1 rounded-lg w-full"
                        placeholder="লিখব যা বলতে চাই..."
                        required={true} />
                </div>
                {
                    authError.flag && (
                        <div
                            className="text-red-400 text-xs text-center"> {authError.details}
                        </div>
                    )
                }
                {loading === 'sendComment' ? <Loader /> :
                    (<div className="m-1 mt-4 h-fit bg-[#20BB96] rounded-lg">
                        <button type="submit" className="p-1.5">
                            Send
                        </button>
                    </div>)
                }
            </form>
        </div>
    )
}