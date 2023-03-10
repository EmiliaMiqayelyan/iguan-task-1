import "./table.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Table() {
    
  const [table, setTable] = useState(false);

  return (
    <div className="table">
      <div className="table-top">
        <div className="table-top-1">
          <span>Votes (15/34)</span>
          <strong>
            <span>Community Members</span>
          </strong>
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
      <div className="table-parts-color">
        <div className="table-part1">
          <img
            className="table-img"
            src="https://mir-s3-cdn-cf.behance.net/user/276/8120bf724192.632a1f946179c.png"
            alt=""
          />
          <div>
            <p>
              <strong>PopArt Studio</strong> <i>from</i>
              <strong>United States</strong>
            </p>
            <span>popwebdesign.net</span>
          </div>
        </div>
        <div className="part1">
          <div>8</div>
          <div>8</div>
          <div>8</div>
          <div>9</div>
        </div>
        <div className="part1-div">8.10</div>
      </div>
      <hr className="table-hr" />
      <div className="table-parts">
        <div className="table-part1">
          <img
            className="table-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GQcZoNMo8aRSPtO41mH6xitjubDVq23-qGKjLdLLpBoQUh-opv7CBVGp9qthmsydafc&usqp=CAU"
            alt=""
          />
          <div>
            <p>
              <strong>EZIO Creative</strong> <i>from</i>
              <strong>United States</strong>
            </p>
            <span>eziocreative.com</span>
          </div>
        </div>
        <div className="part1">
          <div>8</div>
          <div>7</div>
          <div>7</div>
          <div>9</div>
        </div>
        <div className="part1-div">8.00</div>
      </div>
      <hr className="table-hr" />
      <div className="table-parts-color">
        <div className="table-part1">
          <img
            className="table-img"
            src="https://static.tildacdn.com/tild6332-3735-4838-b962-653632313064/IMG_3861.JPG"
            alt=""
          />
          <div>
            <p>
              <strong>Ksenia Snegireva</strong> <i>from</i>
              <strong>Switzerland</strong>
            </p>
            <span>westavenueagency.com</span>
          </div>
        </div>
        <div className="part1">
          <div>10</div>
          <div>9</div>
          <div>7</div>
          <div>10</div>
        </div>
        <div className="part1-div">9.10</div>
      </div>
      <hr className="table-hr" />
      <div className="table-parts">
        <div className="table-part1">
          <img
            className="table-img"
            src="https://images.squarespace-cdn.com/content/v1/53c86617e4b09f1cf07be196/1594235115643-RX549MUC8FU4TLNL141H/Square+Books.jpg"
            alt=""
          />
          <div className="flex-div">
            <p>
              <strong>Ioffe </strong> <i>from</i> <strong>Israel</strong>
            </p>
            <span>deviantart.com</span>
          </div>
        </div>
        <div className="part1">
          <div>7</div>
          <div>8</div>
          <div>8</div>
          <div>9</div>
        </div>
        <div className="part1-div">7.70</div>
      </div>

      <hr style={{ display: table ? "none" : "block" }} className="table-hr" />

      {!table && (
        <div className="table-parts-last">
          <div className="table-part1">
            <img
              className="table-img"
              src="https://assets.awwwards.com/awards/avatar/1007231/61051e0b25740821874024.jpg"
              alt=""
            />
            <div>
              <p>
                <strong>F??lix Hieronimus </strong> <i>* from</i>
                <strong>France</strong>
              </p>
              <span>felixhieronimus.com</span>
            </div>
          </div>
          <div className="part1">
            <div>6</div>
            <div>7</div>
            <div>7</div>
            <div>6</div>
          </div>
          <div className="part1-div">6.50</div>
        </div>
      )}

      <Button
        style={{ display: table ? "none" : "block" }}
        onClick={() => setTable(!table)}
        className="add-btn"
        variant="outline-dark"
      >
        ...
      </Button>

      <div
        className="hidden-table"
        style={{ display: table ? "block" : "none" }}
      >
        <div className="table-hidden-parts-color">
          <div className="table-hidden-part1">
            <img
              className="table-hidden-img"
              src="https://assets.awwwards.com/awards/avatar/1007231/61051e0b25740821874024.jpg"
              alt=""
            />
            <div>
              <p>
                <strong>F??lix Hieronimus </strong> <i>* from</i>
                <strong>France</strong>
              </p>
              <span>felixhieronimus.com</span>
            </div>
          </div>
          <div className="hidden-part1">
            <div>6</div>
            <div>5</div>
            <div>9</div>
            <div>10</div>
          </div>
          <div className="hidden-part1-div">6.50</div>
        </div>
        <hr className="table-hr" />
        <div className="table-hidden-parts">
          <div className="table-hidden-part1">
            <img
              className="table-hidden-img"
              src="https://media.licdn.com/dms/image/C4E03AQEiXaffYfrZ0g/profile-displayphoto-shrink_100_100/0/1653078149679?e=1678320000&v=beta&t=FcP_ba3gYK4OrBxLHSB-BA0Z9vL-hAwum-PoDiWKF6Q"
              alt=""
            />
            <div>
              <p>
                <strong>Erwan Le Roch</strong> <i>* from</i>
                <strong>France</strong>
              </p>
              <span>felixhieronimus.com</span>
            </div>
          </div>
          <div className="hidden-part1">
            <div>8</div>
            <div>7</div>
            <div>6</div>
            <div>6</div>
          </div>
          <div className="hidden-part1-div">7.00</div>
        </div>
        <hr className="table-hr" />
        <div className="table-hidden-parts-color">
          <div className="table-hidden-part1">
            <img
              className="table-hidden-img"
              src="https://assets.awwwards.com/awards/avatar/967413/610ba96922f65561003896.jpeg"
              alt=""
            />
            <div>
              <p>
                <strong>Irene Butenko</strong> <i>from</i>
                <strong>United States</strong>
              </p>
              <span>irene-butenko.com</span>
            </div>
          </div>
          <div className="hidden-part1">
            <div>9</div>
            <div>10</div>
            <div>7</div>
            <div>8</div>
          </div>
          <div className="hidden-part1-div">8.10</div>
        </div>
        <hr className="table-hr" />
        <div className="table-hidden-parts">
          <div className="table-hidden-part1">
            <img
              className="table-hidden-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRyjb-p04EpN7eMP4FOZ1C43J0rMCUWIoB5yG_NwiobA&s"
              alt=""
            />
            <div>
              <p>
                <strong>Arnaud Saunier</strong> <i>from</i>
                <strong>France</strong>
              </p>
              <span>marindessables.fr</span>
            </div>
          </div>
          <div className="hidden-part1">
            <div>10</div>
            <div>7</div>
            <div>9</div>
            <div>6</div>
          </div>
          <div className="hidden-part1-div">
            <p>6.50</p>
          </div>
        </div>
        <hr className="table-hr" />
      </div>
    </div>
  );
}
export default Table;
