import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Episode.css';

export const Episode = () => {
  return (
    <>
      <div>
        <div className='container-fluid'>
          <div className='bg-on-secondary episode-top-edge'>{/* line top edge: part top of the casette */}</div>
        </div>
        <div className='container'>
          <div className='border-5 border-primary-variant episode-top-lower text-center'>
            <h3 className='mt-4'>personal brand</h3>
            <span>11-12-12</span>
          </div>

          <div className='mt-5 pt-3 d-flex justify-content-center'>
            <div className='border border-2 border-bg-primary episode-player d-flex align-items-center justify-content-center'>
              {/* <div>
                button
              </div>
              <div className='flex-grow-1'>
                time
              </div> */}
              <AudioPlayer
                autoPlay
                src="http://example.com/audio.mp3"
                onPlay={e => console.log("onPlay")}
              // other props here
              />
            </div>
          </div>
        </div>


        <div className='container-fluid bg-secondary my-4 episode-banner-of-content'>

          <div className='position-relative'>
            <div className='text-nowrap fs-7 position-relative'>
              <div className='position-absolute episode-comments'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus, quia sed accusamus animi inventore eveniet commodi! Beatae necessitatibus dicta sed? Deleniti saepe repellendus doloremque labore sequi ipsa nulla non!
              </div>
            </div>
            <div className='position-absolute w-100 top-50 start-0'>

              <div className='d-flex justify-content-center pt-3'>

                <div className='inline-block mx-3 text-center'>
                  <div>
                    <img src="./assets/icons/perfil-a.png" alt='...' width="50px" />
                  </div>
                  <p className='fs-7'><a href='.'>@andreaes</a></p>
                </div>
                <div className='inline-block mx-3 text-center'>
                  <div>
                    <img src="./assets/icons/perfil-b.png" width="50px" alt='...' />
                  </div>
                  <p className='fs-7'><a href='.'>@carloso</a></p>
                </div>
                <div className='inline-block mx-3 text-center'>
                  <div>
                    <img src="./assets/icons/perfil-c.png" width="50px" alt='...' />
                  </div>
                  <p className='fs-7'><a href='.'>@lafina</a></p>
                </div>
                <div className='inline-block mx-3 text-center'>
                  <div>
                    <img src="./assets/icons/perfil-d.png" width="50px" alt='...' />
                  </div>
                  <p className='fs-7'><a href='.'>@pasiente</a></p>
                </div>
              </div>
            </div>

            <div className='w-100 position-absolute episode-form text-center'>
              <div className='d-flex justify-content-center'>
                <input
                  className="form-control-sm form-control mb-3 w-50"
                  name="email"
                  value="..."
                  id="contact_email"
                  type="email" required />
              </div>

            </div>

          </div>



        </div>

        <div className='container'>
          <div className='bg-on-secondary episode-top-edge'>{/* line top edge: part top of the casette */}</div>
        </div>

      </div>
    </>
  )
}
