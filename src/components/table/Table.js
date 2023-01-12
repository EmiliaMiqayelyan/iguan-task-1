import "./table.css";

function Table() {
    return (
        <div className="table">
            <div className="table-top">
                <div className="table-top-1">
                    <span>Votes (15/34)</span>
                    <strong><span>Community Members</span></strong>
                </div>
                <div className="table-top-2">
                    <span>Design</span>
                    <span>Usability</span>
                    <span>Creativity</span>
                    <span>Content</span>
                    <span>Overall</span>
                </div>
            </div>
            <hr className="table-hr" />
            <div className="table-parts" style={{backgroundColor: "#F3F3F3"}}>
                <div className="table-part1">
                    <img className="table-img" src="https://mir-s3-cdn-cf.behance.net/user/276/8120bf724192.632a1f946179c.png" alt="" />
                    <div>
                        <p><strong>PopArt Studio</strong> <i>from</i> <strong>United States</strong></p>
                        <span>popwebdesign.net</span>
                    </div>
                </div>
                <div className="part1">
                    <div>8</div>
                    <div>8</div>
                    <div>8</div>
                    <div>9</div>
                    <div style={{ backgroundColor: '#e9e9e9', fontWeight: "bold" }}>8.10</div>
                </div>
            </div>
            <hr className="table-hr" />
            <div className="table-parts">
                <div className="table-part1">
                    <img className="table-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GQcZoNMo8aRSPtO41mH6xitjubDVq23-qGKjLdLLpBoQUh-opv7CBVGp9qthmsydafc&usqp=CAU" alt="" />
                    <div>
                        <p><strong>EZIO Creative</strong> <i>from</i> <strong>United States</strong></p>
                        <span>eziocreative.com</span>
                    </div>
                </div>
                <div className="part1">
                    <div>8</div>
                    <div>7</div>
                    <div>7</div>
                    <div>9</div>
                    <div style={{ backgroundColor: '#e9e9e9', fontWeight: "bold" }}>8.00</div>
                </div>
            </div>
            <hr className="table-hr" />
            <div className="table-parts" style={{backgroundColor: "#F3F3F3"}}>
                <div className="table-part1">
                    <img className="table-img" src="https://static.tildacdn.com/tild6332-3735-4838-b962-653632313064/IMG_3861.JPG" alt="" />
                    <div>
                        <p><strong>Ksenia Snegireva</strong> <i>from</i> <strong>Switzerland</strong></p>
                        <span>westavenueagency.com</span>
                    </div>
                </div>
                <div className="part1">
                    <div>10</div>
                    <div>9</div>
                    <div>7</div>
                    <div>10</div>
                    <div style={{ backgroundColor: '#e9e9e9', fontWeight: "bold" }}>9.10</div>
                </div>
            </div>
            <hr className="table-hr" />
            <div className="table-parts">
                <div className="table-part1">
                    <img className="table-img" src="https://images.squarespace-cdn.com/content/v1/53c86617e4b09f1cf07be196/1594235115643-RX549MUC8FU4TLNL141H/Square+Books.jpg" alt="" />
                    <div style={{ display: "flex" }}>
                        <p><strong>Ioffe </strong> <i>from</i> <strong>Israel</strong></p>
                        <span>deviantart.com</span>
                    </div>
                </div>
                <div className="part1">
                    <div>7</div>
                    <div>8</div>
                    <div>8</div>
                    <div>9</div>
                    <div style={{ backgroundColor: '#e9e9e9', fontWeight: "bold" }}>7.70</div>
                </div>
            </div>
            <hr className="table-hr" />
            <div className="table-parts last">
                <div className="table-part1">
                    <img className="table-img" src="https://assets.awwwards.com/awards/avatar/1007231/61051e0b25740821874024.jpg" alt="" />
                    <div>
                        <p><strong>Félix Hieronimus  </strong> <i>* from</i> <strong>France</strong></p>
                        <span>felixhieronimus.com</span>
                    </div>
                </div>
                <div className="part1">
                    <div>6</div>
                    <div>7</div>
                    <div>7</div>
                    <div>6</div>
                    <div style={{ backgroundColor: '#e9e9e9', fontWeight: "bold" }}>6.50</div>
                </div>
            </div>
            <hr className="table-hr" />
        </div>
    )
}
export default Table;

