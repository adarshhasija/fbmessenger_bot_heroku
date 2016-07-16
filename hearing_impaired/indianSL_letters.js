module.exports = {
    letterToISLImage: letterToISLImage,
    letterToISLDescription: letterToISLDescription,
};

const a_description = "Raise both your hands with fingers pointing up and palms pointing away from you. Extend both your thumbs so that "+
                                    "the tips are touching. Finally curl all your other fingers inwards";
const b_description = "Raise both your hands with fingers pointing up and palms pointing inwards, towards the other "+
                                    "hand. Close each hand so that the tips of the fingers touch the tip of the thumb. Now move both "+
                                    "hands together so that the tip of the thumbs of one hand touches the tip of the thumb of the other";
const c_description = "Raise your hand with your palm pointing left or right. Curl your fingers downwards and your thumb "+
                                    "upwards to form a curve shape";
const d_description = "Raise your left hand with fingers pointed up and palm pointed outwards. Extend your thumb "+
                                    "out to right and close your 3,4 and 5th fingers. Now raise your right hand. Place the tip of your first "+
                                    "finger at the tip of your left hand first finger and place your right hand thumb tip at the base of "+
                                    "your left hand first finger";
const e_description = "Raise your left hand with palm facing inwards. Turn your hand so that your fingers are pointing towards the upper right and close all "+
						"fingers except your 1st finger extended. Now lift your right hand with palms facing outward. Close all fingers except the 1st finger. "+
						"Now ensure the tips of both 1st fingers are touching";
const f_description = "Raise your left hand with palm facing inward. Rotate it slightly so your fingers are pointed to the top right. Close your last 2 fingers. "+
						"Lift your right hand with palm facing outward and fingers upward. Close the last 2 fingers and touch the tip of the 1st 2 fingers against the "+
						"same fingers of the left hand";
const g_description = "Raise your left hand with and curl it into a fist with palm pointed inwards. Do the same with your right hand and place it over your left hand. ";
const h_description = "Raise your left hand with palm facing you and fingers facing straight to the right. Raise your right hand with palm facing out and fingers facing "+
						"upwards. Place your right hand on your left wrist.";
const i_description = "Raise your right hand with palm facing out and fingers facing up. Close your thumb and your 2nd to 5th fingers. Only your first finger should be pointed up";
const j_description = "Raise your right hand with palm facing right and fingers pointed downwards. Extend your thumb outwards away from your palm. Curl your first two fingers "+
						"inwards slightly";
const k_description = "Raise your left hand with fingers pointed up and palm facing right. Extend your thumb away from your palm. Now raise your right hand with fingers pointed up "+
						"and palm facing the left hand. Extend and place the right thumb on the left thumb. Curl the fingers inwards slightly so they touch the fingers of the left hand"; 
const l_description = "Raise your left hand with fingers pointed up and palm pointed outwards. Extend your thumb out to the right. Close your 2nd to 4th fingers.";
const m_description = "Raise your left with fingers pointed up and palm facing inwards. Rotate your hand so that your fingers are pointed to the top right. Now raise "+
						"your right hand with fingers facing up and palm facing the left hand. Close the thumb and last finger. Place the middle three fingers on the "+
						"wrist of the left hand";
const n_description = "Raise your left with fingers pointed up and palm facing inwards. Rotate your hand so that your fingers are pointed to the top right. Now raise "+
						"your right hand with fingers facing up and palm facing the left hand. Close the thumb and last two finger. Place the middle two fingers on the "+
						"wrist of the left hand";
const o_description = "Raise your right hand with fingers pointed up and palm facing the right. Curl your thumb and first finger so that the tips touch to form the letter O.";
const p_description = "Raise your left hand with fingers pointed upwards and palm facing right. Extend your thumb away from your palm. Close your 2nd to 4th fingers. Now raise your "+
						"right hand with fingers pointed up and palm facing the left hand. Curl the fingers and thumb so that they form an O and move them against the left hand 1st finger";
const q_description = "Raise your right hand with palm facing outward and fingers pointed up. Rotate the hand so that the fingers point to the top left. Close all fingers except your second "+
						"finger. Now raise your left hand and move it towards your right hand. Use your thumb and 1st finger to hold the 2nd finger of your right hand at the tip";
const r_description = "Raise your left hand so that the fingers point up and the palm faces inwards. Rotate your hand so that the fingers point to the top right. Now raise your right "+
						"hand. Curl your thumb and fingers inwards so that they form an O and place your right hand on the palm of your left hand.";
const s_description = "Raise your left hand with fingers pointed upwards and palm facing inwards. Rotate your hand so the fingers point to the top right. Place your right hand flat behind your "+
						"left such that the thumb is in front of the left hand but the remaining fingers are behind. Put your right thumb between the last 2 fingers of your left hand so that the "+
						"thumb is in front of the last finger but behind the other fingers";
const t_description = "Raise your left hand so that the fingers are pointed to the right and the palm downwards. Curl all fingers inwards except the 1st finger. Now raise your right hand with "+
						"fingers pointed upwards and palm outwards. Close all fingers except the 1st finger. Touch the tip of the right finger to the tip of the left finger";
const u_description = "Raise your left hand with fingers pointed up and palm facing right. Curl your 2nd to 4th fingers into your palm. Curl your thumb away from your palm slightly "+
						"so that your first finger and thumb form a U curve.";
const v_description = "Raise your left hand with fingers pointed up and palm pointed outwards. Close all but your 1st and 2nd finger. Move these two fingers apart so that they form a V.";
const w_description = "Raise your left hand with palm pointing inwards. Show three fingers with your left hand.";
const x_description = "Put the first finger of your right hand on the first finger of your left hand";
const y_description = "Raise your left hand so that the fingers are pointed up and the palm is facing right. Extend your thumb outwards so that the thumb and 1st finger form a U. Close all "+
						"the other fingers. Take the 1st finger of the right hand and place it on the palm of the left hand between the 1st finger and the thumb";
const z_description = "Raise your left hand with palm facing up. Take your right hand and place the tip of all fingers on the palm of your left hand.";

function letterToISLImage(letter) {
	var image_url = "";

    switch(letter) {
      case 'a':
        /*  var elements = []
            elements.push({
                    "title": letter.toUpperCase(),
                    "subtitle": "Indian Sign Language",
                    "image_url": "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0",
                })	*/
            image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fa_isl.png?alt=media&token=1f5c35a4-3113-4547-9c27-4d600b09cee0";
          break

      case 'b':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fb_isl.png?alt=media&token=cf006cc1-c02b-4597-a4f3-daaab1c3072a";
      		break

      case 'c':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fc_isl.png?alt=media&token=d67d00b2-00de-4854-ad60-d348fc0ec4e9";
      		break

      case 'd':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fd_isl.png?alt=media&token=83d2db2c-ddcc-469d-a4ac-960cee153fb0";
      		break

      case 'e':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fe_isl.png?alt=media&token=a59d77eb-fbe2-44c5-9cb4-f7f88b13074f";
			break

      case 'f':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Ff_isl.png?alt=media&token=cd2c4b0b-e793-4e04-bf53-af5899309da1";
			break

      case 'g':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fg_isl.png?alt=media&token=ba2efb29-15f6-460d-9cd3-6dc449e4497d";
      		break

      case 'h':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fh_isl.png?alt=media&token=95172ccb-3dfa-4671-8449-5ac387162006";
      		break

      case 'i':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fi_isl.png?alt=media&token=1ba4be80-87e2-4c2e-9710-49a60028ceb0";
      		break

      case 'j':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fj_isl.png?alt=media&token=bbeb352c-5deb-4eaa-9525-457fee2d7e80";
      		break

      case 'k':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fk_isl.png?alt=media&token=6f72f2ee-1c2b-4c97-95b5-d56a520b1427";
      		break

      case 'l':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fl_isl.png?alt=media&token=a5176bc7-ebc9-4842-9a79-fddd4292e0c1";
      		break

      case 'm':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fm_isl.png?alt=media&token=f43d60cf-ee02-41f7-b370-6d3aa577dd55";
      		break

      case 'n':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fn_isl.png?alt=media&token=af05b408-a1dd-40a3-9e08-a4e118a53009";
      		break

      case 'o':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fo_isl.png?alt=media&token=7539ff08-2c6e-495f-83a6-34ea4fddeed0";
      		break

      case 'p':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fp_isl.png?alt=media&token=158d1986-3b97-4698-a112-4a7540bc2ddc";
      		break

      case 'q':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fq_isl.png?alt=media&token=fad9a01c-34e7-41de-9ef8-a9b5a617cf95";
      		break

      case 'r':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fr_isl.png?alt=media&token=552d9d01-508f-4899-b3fa-2f170f31d472";
      		break

      case 's':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fs_isl.png?alt=media&token=e09aa80e-0d19-4e91-a6cc-d97bf23e21a9";
      		break

      case 't':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Ft_isl.png?alt=media&token=21e8e412-183f-42b4-a5b0-178cc120af42";
      		break

      case 'u':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fu_isl.png?alt=media&token=1b73e175-f8da-4da9-96a8-513d25206212";
      		break

      case 'v':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fv_isl.png?alt=media&token=f746d54a-f26f-40e0-a7a0-cb6528e3fc50";
      		break

      case 'w':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fw_isl.png?alt=media&token=8158f6af-dc4b-4024-a3fd-01b360ce0e81";
      		break

      case 'x':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fx_isl.png?alt=media&token=3065a954-eb31-4649-8d52-aec052d27cd3";
      		break

      case 'y':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fy_isl.png?alt=media&token=7b027197-6c2d-46f5-aa65-f0ccc521a8ff";
      		break

      case 'z':
      		image_url = "https://firebasestorage.googleapis.com/v0/b/cila-1.appspot.com/o/isl_alphabet%2Fz_isl.png?alt=media&token=03e12c87-d3eb-410a-92f8-268c898757e9";
      		break

      default:
          break
    }

    return image_url;
}


function letterToISLDescription(letter) {
	var text = "Sorry, no description available"

    switch(letter) {
      case 'a':
          text = a_description;
          break

      case 'b':
          text = b_description;
          break

      case 'c':
          text = c_description;
          break

      case 'd':
          text = d_description;
          break

      case 'e':
          text = e_description;
          break

      case 'f':
          text = f_description;
          break

      case 'g':
          text = g_description;
          break

      case 'h':
          text = h_description;
          break

      case 'i':
          text = i_description;
          break

      case 'j':
          text = j_description;
          break

      case 'k':
          text = k_description;
          break

      case 'l':
          text = l_description;
          break

      case 'm':
          text = m_description;
          break

      case 'n':
          text = n_description;
          break

      case 'o':
          text = o_description;
          break

      case 'p':
          text = p_description;
          break

      case 'q':
          text = q_description;
          break

      case 'r':
          text = r_description;
          break

      case 's':
          text = s_description;
          break

      case 't':
          text = t_description;
          break

      case 'u':
          text = u_description;
          break

      case 'v':
          text = v_description;
          break

      case 'w':
          text = w_description;
          break

      case 'x':
          text = x_description;
          break

      case 'y':
          text = y_description;
          break

      case 'z':
          text = z_description;
          break
      
      default:
          break
    }

    return text;
}