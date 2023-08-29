import CommentsBox from "../CommentsBox";
import "./SectionComments.css";

const SectionComments = () => {
    return(
        <section className="section-comments">
            <h3>O que estão dizendo</h3>
                <div className="container">
                    <CommentsBox />
                    <CommentsBox />
                    <CommentsBox />

                </div>
            
        </section>

    );
}

export default SectionComments;