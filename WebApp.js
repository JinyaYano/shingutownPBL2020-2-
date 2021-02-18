/**
 *
 */
let btnstart5 = document.getElementById("mybtn5"); //調べる
let btnstart4 = document.getElementById("mybtn4"); //工夫
let btnstart3 = document.getElementById("mybtn3"); //全探索(仮)

btnstart5.addEventListener("click", full_search45_start);
btnstart4.addEventListener("click", branch_and_bound_start);
btnstart3.addEventListener("click", calculation_start);

var itemprice = [30, 50, 80, 90, 100, 110, 120, 130, 150, 160, 100, 120, 130, 140, 100, 100, 150, 130, 130, 160, 100, 90, 110, 120, 120, 100, 120, 120, 90, 120, 110, 90, 110, 110, 100, 100, 100, 100, 100, 110, 70, 100, 120, 120, 60];
var itemvalue = [8, 6, 8, 9, 7, 6, 7, 5, 8, 9, 8, 6, 7, 7, 6, 8, 7, 8, 8, 7, 7, 7, 6, 7, 6, 6, 8, 7, 6, 9, 7, 6, 8, 8, 8, 7, 6, 5, 5, 6, 8, 8, 7, 7, 6];
var limitprice = 300;
var choicenumber = 0;
var maxvalue = 0;


function full_search45_start() {
	const startTime = performance.now();

	var SplitTime;
	var cnt = 1;

	var sumprice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var sumvalue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var buy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	var maxprice = 0;
	var maxvalue = 0;
	var maxbuy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


	for (buy[0] = 0; buy[0] < 2; buy[0]++) {
		if (buy[0] == 1) {
			sumprice[0] = itemprice[0];
			sumvalue[0] = itemvalue[0];
		}
		else {
			sumprice[0] = 0;
			sumvalue[0] = 0;
		}

		for (buy[1] = 0; buy[1] < 2; buy[1]++) {
			if (buy[1] == 1) {
				sumprice[1] = sumprice[0] + itemprice[1];
				sumvalue[1] = sumvalue[0] + itemvalue[1];
			}
			else {
				sumprice[1] = sumprice[0];
				sumvalue[1] = sumvalue[0];
			}

			for (buy[2] = 0; buy[2] < 2; buy[2]++) {
				if (buy[2] == 1) {
					sumprice[2] = sumprice[1] + itemprice[2];
					sumvalue[2] = sumvalue[1] + itemvalue[2];
				}
				else {
					sumprice[2] = sumprice[1];
					sumvalue[2] = sumvalue[1];
				}


				for (buy[3] = 0; buy[3] < 2; buy[3]++) {
					if (buy[3] == 1) {
						sumprice[3] = sumprice[2] + itemprice[3];
						sumvalue[3] = sumvalue[2] + itemvalue[3];
					}
					else {
						sumprice[3] = sumprice[2];
						sumvalue[3] = sumvalue[2];
					}

					for (buy[4] = 0; buy[4] < 2; buy[4]++) {
						if (buy[4] == 1) {
							sumprice[4] = sumprice[3] + itemprice[4];
							sumvalue[4] = sumvalue[3] + itemvalue[4];
						}
						else {
							sumprice[4] = sumprice[3];
							sumvalue[4] = sumvalue[3];
						}


						for (buy[5] = 0; buy[5] < 2; buy[5]++) {
							if (buy[5] == 1) {
								sumprice[5] = sumprice[4] + itemprice[5];
								sumvalue[5] = sumvalue[4] + itemvalue[5];
							}
							else {
								sumprice[5] = sumprice[4];
								sumvalue[5] = sumvalue[4];
							}

							for (buy[6] = 0; buy[6] < 2; buy[6]++) {
								if (buy[6] == 1) {
									sumprice[6] = sumprice[5] + itemprice[6];
									sumvalue[6] = sumvalue[5] + itemvalue[6];
								}
								else {
									sumprice[6] = sumprice[5];
									sumvalue[6] = sumvalue[5];
								}


								for (buy[7] = 0; buy[7] < 2; buy[7]++) {
									if (buy[7] == 1) {
										sumprice[7] = sumprice[6] + itemprice[7];
										sumvalue[7] = sumvalue[6] + itemvalue[7];
									}
									else {
										sumprice[7] = sumprice[6];
										sumvalue[7] = sumvalue[6];
									}


									for (buy[8] = 0; buy[8] < 2; buy[8]++) {
										if (buy[8] == 1) {
											sumprice[8] = sumprice[7] + itemprice[8];
											sumvalue[8] = sumvalue[7] + itemvalue[8];
										}
										else {
											sumprice[8] = sumprice[7];
											sumvalue[8] = sumvalue[7];
										}


										for (buy[9] = 0; buy[9] < 2; buy[9]++) {
											if (buy[9] == 1) {
												sumprice[9] = sumprice[8] + itemprice[9];
												sumvalue[9] = sumvalue[8] + itemvalue[9];
											}
											else {
												sumprice[9] = sumprice[8];
												sumvalue[9] = sumvalue[8];
											}



											for (buy[10] = 0; buy[10] < 2; buy[10]++) {
												if (buy[10] == 1) {
													sumprice[10] = sumprice[9] + itemprice[10];
													sumvalue[10] = sumvalue[9] + itemvalue[10];
												}
												else {
													sumprice[10] = sumprice[9];
													sumvalue[10] = sumvalue[9];
												}


												for (buy[11] = 0; buy[11] < 2; buy[11]++) {
													if (buy[11] == 1) {
														sumprice[11] = sumprice[10] + itemprice[11];
														sumvalue[11] = sumvalue[10] + itemvalue[11];

													}
													else {
														sumprice[11] = sumprice[10];
														sumvalue[11] = sumvalue[10];
													}


													for (buy[12] = 0; buy[12] < 2; buy[12]++) {
														if (buy[12] == 1) {
															sumprice[12] = sumprice[11] + itemprice[12];
															sumvalue[12] = sumvalue[11] + itemvalue[12];
														}
														else {
															sumprice[12] = sumprice[11];
															sumvalue[12] = sumvalue[11];
														}


														for (buy[13] = 0; buy[13] < 2; buy[13]++) {
															if (buy[13] == 1) {
																sumprice[13] = sumprice[12] + itemprice[13];
																sumvalue[13] = sumvalue[12] + itemvalue[13];
															}
															else {
																sumprice[13] = sumprice[12];
																sumvalue[13] = sumvalue[12];
															}


															for (buy[14] = 0; buy[14] < 2; buy[14]++) {
																if (buy[14] == 1) {
																	sumprice[14] = sumprice[13] + itemprice[14];
																	sumvalue[14] = sumvalue[13] + itemvalue[14];
																}
																else {
																	sumprice[14] = sumprice[13];
																	sumvalue[14] = sumvalue[13];
																}


																for (buy[15] = 0; buy[15] < 2; buy[15]++) {


																	if (buy[15] == 1) {
																		sumprice[15] = sumprice[14] + itemprice[15];
																		sumvalue[15] = sumvalue[14] + itemvalue[15];
																	}
																	else {
																		sumprice[15] = sumprice[14];
																		sumvalue[15] = sumvalue[14];
																	}

																	for (buy[16] = 0; buy[16] < 2; buy[16]++) {
																		if (buy[16] == 1) {
																			sumprice[16] = sumprice[15] + itemprice[16];
																			sumvalue[16] = sumvalue[15] + itemvalue[16];
																		}
																		else {
																			sumprice[16] = sumprice[15];
																			sumvalue[16] = sumvalue[15];
																		}


																		for (buy[17] = 0; buy[17] < 2; buy[17]++) {

																			if (buy[17] == 1) {
																				sumprice[17] = sumprice[16] + itemprice[17];
																				sumvalue[17] = sumvalue[16] + itemvalue[17];
																			}
																			else {
																				sumprice[17] = sumprice[16];
																				sumvalue[17] = sumvalue[16];
																			}


																			for (buy[18] = 0; buy[18] < 2; buy[18]++) {



																				if (buy[18] == 1) {
																					sumprice[18] = sumprice[17] + itemprice[18];
																					sumvalue[18] = sumvalue[17] + itemvalue[18];
																				}
																				else {
																					sumprice[18] = sumprice[17];
																					sumvalue[18] = sumvalue[17];
																				}


																				for (buy[19] = 0; buy[19] < 2; buy[19]++) {
																					if (buy[19] == 1) {
																						sumprice[19] = sumprice[18] + itemprice[19];
																						sumvalue[19] = sumvalue[18] + itemvalue[19];
																					}
																					else {
																						sumprice[19] = sumprice[18];
																						sumvalue[19] = sumvalue[18];
																					}

																					for (buy[20] = 0; buy[20] < 2; buy[20]++) {





																						if (buy[20] == 1) {
																							sumprice[20] = sumprice[19] + itemprice[20];
																							sumvalue[20] = sumvalue[19] + itemvalue[20];
																						}
																						else {
																							sumprice[20] = sumprice[19];
																							sumvalue[20] = sumvalue[19];
																						}


																						for (buy[21] = 0; buy[21] < 2; buy[21]++) {
																							if (buy[21] == 1) {
																								sumprice[21] = sumprice[20] + itemprice[21];
																								sumvalue[21] = sumvalue[20] + itemvalue[21];
																							}
																							else {
																								sumprice[21] = sumprice[20];
																								sumvalue[21] = sumvalue[20];
																							}


																							for (buy[22] = 0; buy[22] < 2; buy[22]++) {
																								if (buy[22] == 1) {
																									sumprice[22] = sumprice[21] + itemprice[22];
																									sumvalue[22] = sumvalue[21] + itemvalue[22];
																								}
																								else {
																									sumprice[22] = sumprice[21];
																									sumvalue[22] = sumvalue[21];
																								}


																								for (buy[23] = 0; buy[23] < 2; buy[23]++) {
																									if (buy[23] == 1) {
																										sumprice[23] = sumprice[22] + itemprice[23];
																										sumvalue[23] = sumvalue[22] + itemvalue[23];
																									}
																									else {
																										sumprice[23] = sumprice[22];
																										sumvalue[23] = sumvalue[22];
																									}


																									for (buy[24] = 0; buy[24] < 2; buy[24]++) {
																										if (buy[24] == 1) {
																											sumprice[24] = sumprice[23] + itemprice[24];
																											sumvalue[24] = sumvalue[23] + itemvalue[24];
																										}
																										else {
																											sumprice[24] = sumprice[23];
																											sumvalue[24] = sumvalue[23];
																										}


																										for (buy[25] = 0; buy[25] < 2; buy[25]++) {
																											if (buy[25] == 1) {
																												sumprice[25] = sumprice[24] + itemprice[25];
																												sumvalue[25] = sumvalue[24] + itemvalue[25];
																											}
																											else {
																												sumprice[25] = sumprice[24];
																												sumvalue[25] = sumvalue[24];
																											}

																											for (buy[26] = 0; buy[26] < 2; buy[26]++) {
																												if (buy[26] == 1) {
																													sumprice[26] = sumprice[25] + itemprice[26];
																													sumvalue[26] = sumvalue[25] + itemvalue[26];
																												}
																												else {
																													sumprice[26] = sumprice[25];
																													sumvalue[26] = sumvalue[25];
																												}


																												for (buy[27] = 0; buy[27] < 2; buy[27]++) {
																													if (buy[27] == 1) {
																														sumprice[27] = sumprice[26] + itemprice[27];
																														sumvalue[27] = sumvalue[26] + itemvalue[27];
																													}
																													else {
																														sumprice[27] = sumprice[26];
																														sumvalue[27] = sumvalue[26];
																													}


																													for (buy[28] = 0; buy[28] < 2; buy[28]++) {
																														if (buy[28] == 1) {
																															sumprice[28] = sumprice[27] + itemprice[28];
																															sumvalue[28] = sumvalue[27] + itemvalue[28];
																														}
																														else {
																															sumprice[28] = sumprice[27];
																															sumvalue[28] = sumvalue[27];
																														}


																														for (buy[29] = 0; buy[29] < 2; buy[29]++) {
																															if (buy[29] == 1) {
																																sumprice[29] = sumprice[28] + itemprice[29];
																																sumvalue[29] = sumvalue[28] + itemvalue[29];
																															}
																															else {
																																sumprice[29] = sumprice[28];
																																sumvalue[29] = sumvalue[28];
																															}


																															for (buy[30] = 0; buy[30] < 2; buy[30]++) {



																																if (buy[30] == 1) {
																																	sumprice[30] = sumprice[29] + itemprice[30];
																																	sumvalue[30] = sumvalue[29] + itemvalue[30];
																																}
																																else {
																																	sumprice[30] = sumprice[29];
																																	sumvalue[30] = sumvalue[29];
																																}


																																for (buy[31] = 0; buy[31] < 2; buy[31]++) {
																																	if (buy[31] == 1) {
																																		sumprice[31] = sumprice[30] + itemprice[31];
																																		sumvalue[31] = sumvalue[30] + itemvalue[31];
																																	}
																																	else {
																																		sumprice[31] = sumprice[30];
																																		sumvalue[31] = sumvalue[30];
																																	}


																																	for (buy[32] = 0; buy[32] < 2; buy[32]++) {
																																		if (buy[32] == 1) {
																																			sumprice[32] = sumprice[31] + itemprice[32];
																																			sumvalue[32] = sumvalue[31] + itemvalue[32];
																																		}
																																		else {
																																			sumprice[32] = sumprice[31];
																																			sumvalue[32] = sumvalue[31];
																																		}


																																		for (buy[33] = 0; buy[33] < 2; buy[33]++) {
																																			if (buy[33] == 1) {
																																				sumprice[33] = sumprice[32] + itemprice[33];
																																				sumvalue[33] = sumvalue[32] + itemvalue[33];
																																			}
																																			else {
																																				sumprice[33] = sumprice[32];
																																				sumvalue[33] = sumvalue[32];
																																			}


																																			for (buy[34] = 0; buy[34] < 2; buy[34]++) {
																																				if (buy[34] == 1) {
																																					sumprice[34] = sumprice[33] + itemprice[34];
																																					sumvalue[34] = sumvalue[33] + itemvalue[34];
																																				}
																																				else {
																																					sumprice[34] = sumprice[33];
																																					sumvalue[34] = sumvalue[33];
																																				}


																																				for (buy[35] = 0; buy[35] < 2; buy[35]++) {
																																					if (buy[35] == 1) {
																																						sumprice[35] = sumprice[34] + itemprice[35];
																																						sumvalue[35] = sumvalue[34] + itemvalue[35];
																																					}
																																					else {
																																						sumprice[35] = sumprice[34];
																																						sumvalue[35] = sumvalue[34];
																																					}


																																					for (buy[36] = 0; buy[36] < 2; buy[36]++) {
																																						if (buy[36] == 1) {
																																							sumprice[36] = sumprice[35] + itemprice[36];
																																							sumvalue[36] = sumvalue[35] + itemvalue[36];
																																						}
																																						else {
																																							sumprice[36] = sumprice[35];
																																							sumvalue[36] = sumvalue[35];
																																						}


																																						for (buy[37] = 0; buy[37] < 2; buy[37]++) {
																																							if (buy[37] == 1) {
																																								sumprice[37] = sumprice[36] + itemprice[37];
																																								sumvalue[37] = sumvalue[36] + itemvalue[37];
																																							}
																																							else {
																																								sumprice[37] = sumprice[36];
																																								sumvalue[37] = sumvalue[36];
																																							}


																																							for (buy[38] = 0; buy[38] < 2; buy[38]++) {
																																								if (buy[38] == 1) {
																																									sumprice[38] = sumprice[37] + itemprice[38];
																																									sumvalue[38] = sumvalue[37] + itemvalue[38];
																																								}
																																								else {
																																									sumprice[38] = sumprice[37];
																																									sumvalue[38] = sumvalue[37];
																																								}


																																								for (buy[39] = 0; buy[39] < 2; buy[39]++) {
																																									if (buy[39] == 1) {
																																										sumprice[39] = sumprice[38] + itemprice[39];
																																										sumvalue[39] = sumvalue[38] + itemvalue[39];
																																									}
																																									else {
																																										sumprice[39] = sumprice[38];
																																										sumvalue[39] = sumvalue[38];
																																									}


																																									for (buy[40] = 0; buy[40] < 2; buy[40]++) {




																																										if (buy[40] == 1) {
																																											sumprice[40] = sumprice[39] + itemprice[40];
																																											sumvalue[40] = sumvalue[39] + itemvalue[40];
																																										}
																																										else {
																																											sumprice[40] = sumprice[39];
																																											sumvalue[40] = sumvalue[39];
																																										}


																																										for (buy[41] = 0; buy[41] < 2; buy[41]++) {
																																											if (buy[41] == 1) {
																																												sumprice[41] = sumprice[40] + itemprice[41];
																																												sumvalue[41] = sumvalue[40] + itemvalue[41];
																																											}
																																											else {
																																												sumprice[41] = sumprice[40];
																																												sumvalue[41] = sumvalue[40];
																																											}


																																											for (buy[42] = 0; buy[42] < 2; buy[42]++) {
																																												if (buy[42] == 1) {
																																													sumprice[42] = sumprice[41] + itemprice[42];
																																													sumvalue[42] = sumvalue[41] + itemvalue[42];
																																												}
																																												else {
																																													sumprice[42] = sumprice[41];
																																													sumvalue[42] = sumvalue[41];
																																												}


																																												for (buy[43] = 0; buy[43] < 2; buy[43]++) {
																																													if (buy[43] == 1) {
																																														sumprice[43] = sumprice[42] + itemprice[43];
																																														sumvalue[43] = sumvalue[42] + itemvalue[43];
																																													}
																																													else {
																																														sumprice[43] = sumprice[42];
																																														sumvalue[43] = sumvalue[42];
																																													}


																																													for (buy[44] = 0; buy[44] < 2; buy[44]++) {
																																														if (buy[44] == 1) {
																																															sumprice[44] = sumprice[43] + itemprice[44];
																																															sumvalue[44] = sumvalue[43] + itemvalue[44];
																																														}



																																														if (sumprice[44] <= 300 && maxvalue < sumvalue[44]) {
																																															maxvalue = sumvalue[44];
																																															maxprice = sumprice[44];
																																															for (var i = 0; i < 45; i++) {
																																																maxbuy[i] = buy[i];
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}

																			SplitTime = performance.now();
																			var Time = parseInt((SplitTime - startTime) / cnt / 1000 / 60 / 60 * (Math.pow(2, 18) - cnt), 10); ///経過時間(単位は時間)

																			if (window.confirm('あと' + Time + '時間くらいかかりそう！計算を続けるならOKをクリック！')) { /////2^18倍の計算が必要

																			} else {
																				return;
																			};  ////buy[17]で確認
																			cnt++;
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	const endTime = performance.now();
	const executionTime = endTime - startTime;


	//結果の表示
	var sname = document.getElementsByName("snackname");

	for (var i = 0; i < 45; i++) {
		if (maxbuy[i] == 1) sname[i].style.backgroundColor = "Red";
	}


	document.getElementById("sumvalue2").textContent = maxvalue;
	document.getElementById("exectime2").textContent = (endTime - startTime) / 1000 + "秒";
	document.getElementById("sumprice2").textContent = maxprice;


	alert("合計金額：" + maxprice + "円" + "\n合計人気度：" + maxvalue + "\n実行時間：" + executionTime / 1000 + "秒");

}



function branch_and_bound_start() {
	const startTime = performance.now();

	var sumprice = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var sumvalue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var buy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	var maxprice = 0;
	var maxvalue = 0;
	var maxbuy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


	for (buy[0] = 0; buy[0] < 2; buy[0]++) {
		if (buy[0] == 1) {
			sumprice[0] = itemprice[0];
			sumvalue[0] = itemvalue[0];
		}
		else {
			sumprice[0] = 0;
			sumvalue[0] = 0;
		}

		if (sumprice[0] > 300) continue;

		for (buy[1] = 0; buy[1] < 2; buy[1]++) {
			if (buy[1] == 1) {
				sumprice[1] = sumprice[0] + itemprice[1];
				sumvalue[1] = sumvalue[0] + itemvalue[1];
			}
			else {
				sumprice[1] = sumprice[0];
				sumvalue[1] = sumvalue[0];
			}

			if (sumprice[1] > 300) continue;

			for (buy[2] = 0; buy[2] < 2; buy[2]++) {
				if (buy[2] == 1) {
					sumprice[2] = sumprice[1] + itemprice[2];
					sumvalue[2] = sumvalue[1] + itemvalue[2];
				}
				else {
					sumprice[2] = sumprice[1];
					sumvalue[2] = sumvalue[1];
				}

				if (sumprice[2] > 300) continue;

				for (buy[3] = 0; buy[3] < 2; buy[3]++) {
					if (buy[3] == 1) {
						sumprice[3] = sumprice[2] + itemprice[3];
						sumvalue[3] = sumvalue[2] + itemvalue[3];
					}
					else {
						sumprice[3] = sumprice[2];
						sumvalue[3] = sumvalue[2];
					}

					if (sumprice[3] > 300) continue;

					for (buy[4] = 0; buy[4] < 2; buy[4]++) {
						if (buy[4] == 1) {
							sumprice[4] = sumprice[3] + itemprice[4];
							sumvalue[4] = sumvalue[3] + itemvalue[4];
						}
						else {
							sumprice[4] = sumprice[3];
							sumvalue[4] = sumvalue[3];
						}

						if (sumprice[4] > 300) continue;

						for (buy[5] = 0; buy[5] < 2; buy[5]++) {
							if (buy[5] == 1) {
								sumprice[5] = sumprice[4] + itemprice[5];
								sumvalue[5] = sumvalue[4] + itemvalue[5];
							}
							else {
								sumprice[5] = sumprice[4];
								sumvalue[5] = sumvalue[4];
							}

							if (sumprice[5] > 300) continue;

							for (buy[6] = 0; buy[6] < 2; buy[6]++) {
								if (buy[6] == 1) {
									sumprice[6] = sumprice[5] + itemprice[6];
									sumvalue[6] = sumvalue[5] + itemvalue[6];
								}
								else {
									sumprice[6] = sumprice[5];
									sumvalue[6] = sumvalue[5];
								}

								if (sumprice[6] > 300) continue;

								for (buy[7] = 0; buy[7] < 2; buy[7]++) {
									if (buy[7] == 1) {
										sumprice[7] = sumprice[6] + itemprice[7];
										sumvalue[7] = sumvalue[6] + itemvalue[7];
									}
									else {
										sumprice[7] = sumprice[6];
										sumvalue[7] = sumvalue[6];
									}

									if (sumprice[7] > 300) continue;

									for (buy[8] = 0; buy[8] < 2; buy[8]++) {
										if (buy[8] == 1) {
											sumprice[8] = sumprice[7] + itemprice[8];
											sumvalue[8] = sumvalue[7] + itemvalue[8];
										}
										else {
											sumprice[8] = sumprice[7];
											sumvalue[8] = sumvalue[7];
										}

										if (sumprice[8] > 300) continue;

										for (buy[9] = 0; buy[9] < 2; buy[9]++) {
											if (buy[9] == 1) {
												sumprice[9] = sumprice[8] + itemprice[9];
												sumvalue[9] = sumvalue[8] + itemvalue[9];
											}
											else {
												sumprice[9] = sumprice[8];
												sumvalue[9] = sumvalue[8];
											}

											if (sumprice[9] > 300) continue;


											for (buy[10] = 0; buy[10] < 2; buy[10]++) {
												if (buy[10] == 1) {
													sumprice[10] = sumprice[9] + itemprice[10];
													sumvalue[10] = sumvalue[9] + itemvalue[10];
												}
												else {
													sumprice[10] = sumprice[9];
													sumvalue[10] = sumvalue[9];
												}

												if (sumprice[10] > 300) continue;

												for (buy[11] = 0; buy[11] < 2; buy[11]++) {
													if (buy[11] == 1) {
														sumprice[11] = sumprice[10] + itemprice[11];
														sumvalue[11] = sumvalue[10] + itemvalue[11];

													}
													else {
														sumprice[11] = sumprice[10];
														sumvalue[11] = sumvalue[10];
													}

													if (sumprice[11] > 300) continue;

													for (buy[12] = 0; buy[12] < 2; buy[12]++) {
														if (buy[12] == 1) {
															sumprice[12] = sumprice[11] + itemprice[12];
															sumvalue[12] = sumvalue[11] + itemvalue[12];
														}
														else {
															sumprice[12] = sumprice[11];
															sumvalue[12] = sumvalue[11];
														}

														if (sumprice[12] > 300) continue;

														for (buy[13] = 0; buy[13] < 2; buy[13]++) {
															if (buy[13] == 1) {
																sumprice[13] = sumprice[12] + itemprice[13];
																sumvalue[13] = sumvalue[12] + itemvalue[13];
															}
															else {
																sumprice[13] = sumprice[12];
																sumvalue[13] = sumvalue[12];
															}

															if (sumprice[13] > 300) continue;

															for (buy[14] = 0; buy[14] < 2; buy[14]++) {
																if (buy[14] == 1) {
																	sumprice[14] = sumprice[13] + itemprice[14];
																	sumvalue[14] = sumvalue[13] + itemvalue[14];
																}
																else {
																	sumprice[14] = sumprice[13];
																	sumvalue[14] = sumvalue[13];
																}

																if (sumprice[14] > 300) continue;

																for (buy[15] = 0; buy[15] < 2; buy[15]++) {
																	if (buy[15] == 1) {
																		sumprice[15] = sumprice[14] + itemprice[15];
																		sumvalue[15] = sumvalue[14] + itemvalue[15];
																	}
																	else {
																		sumprice[15] = sumprice[14];
																		sumvalue[15] = sumvalue[14];
																	}

																	if (sumprice[15] > 300) continue;

																	for (buy[16] = 0; buy[16] < 2; buy[16]++) {
																		if (buy[16] == 1) {
																			sumprice[16] = sumprice[15] + itemprice[16];
																			sumvalue[16] = sumvalue[15] + itemvalue[16];
																		}
																		else {
																			sumprice[16] = sumprice[15];
																			sumvalue[16] = sumvalue[15];
																		}

																		if (sumprice[16] > 300) continue;

																		for (buy[17] = 0; buy[17] < 2; buy[17]++) {
																			if (buy[17] == 1) {
																				sumprice[17] = sumprice[16] + itemprice[17];
																				sumvalue[17] = sumvalue[16] + itemvalue[17];
																			}
																			else {
																				sumprice[17] = sumprice[16];
																				sumvalue[17] = sumvalue[16];
																			}

																			if (sumprice[17] > 300) continue;

																			for (buy[18] = 0; buy[18] < 2; buy[18]++) {
																				if (buy[18] == 1) {
																					sumprice[18] = sumprice[17] + itemprice[18];
																					sumvalue[18] = sumvalue[17] + itemvalue[18];
																				}
																				else {
																					sumprice[18] = sumprice[17];
																					sumvalue[18] = sumvalue[17];
																				}

																				if (sumprice[18] > 300) continue;

																				for (buy[19] = 0; buy[19] < 2; buy[19]++) {
																					if (buy[19] == 1) {
																						sumprice[19] = sumprice[18] + itemprice[19];
																						sumvalue[19] = sumvalue[18] + itemvalue[19];
																					}
																					else {
																						sumprice[19] = sumprice[18];
																						sumvalue[19] = sumvalue[18];
																					}

																					if (sumprice[19] > 300) continue;

																					for (buy[20] = 0; buy[20] < 2; buy[20]++) {
																						if (buy[20] == 1) {
																							sumprice[20] = sumprice[19] + itemprice[20];
																							sumvalue[20] = sumvalue[19] + itemvalue[20];
																						}
																						else {
																							sumprice[20] = sumprice[19];
																							sumvalue[20] = sumvalue[19];
																						}

																						if (sumprice[20] > 300) continue;

																						for (buy[21] = 0; buy[21] < 2; buy[21]++) {
																							if (buy[21] == 1) {
																								sumprice[21] = sumprice[20] + itemprice[21];
																								sumvalue[21] = sumvalue[20] + itemvalue[21];
																							}
																							else {
																								sumprice[21] = sumprice[20];
																								sumvalue[21] = sumvalue[20];
																							}

																							if (sumprice[21] > 300) continue;

																							for (buy[22] = 0; buy[22] < 2; buy[22]++) {
																								if (buy[22] == 1) {
																									sumprice[22] = sumprice[21] + itemprice[22];
																									sumvalue[22] = sumvalue[21] + itemvalue[22];
																								}
																								else {
																									sumprice[22] = sumprice[21];
																									sumvalue[22] = sumvalue[21];
																								}

																								if (sumprice[22] > 300) continue;

																								for (buy[23] = 0; buy[23] < 2; buy[23]++) {
																									if (buy[23] == 1) {
																										sumprice[23] = sumprice[22] + itemprice[23];
																										sumvalue[23] = sumvalue[22] + itemvalue[23];
																									}
																									else {
																										sumprice[23] = sumprice[22];
																										sumvalue[23] = sumvalue[22];
																									}

																									if (sumprice[23] > 300) continue;

																									for (buy[24] = 0; buy[24] < 2; buy[24]++) {
																										if (buy[24] == 1) {
																											sumprice[24] = sumprice[23] + itemprice[24];
																											sumvalue[24] = sumvalue[23] + itemvalue[24];
																										}
																										else {
																											sumprice[24] = sumprice[23];
																											sumvalue[24] = sumvalue[23];
																										}

																										if (sumprice[24] > 300) continue;

																										for (buy[25] = 0; buy[25] < 2; buy[25]++) {
																											if (buy[25] == 1) {
																												sumprice[25] = sumprice[24] + itemprice[25];
																												sumvalue[25] = sumvalue[24] + itemvalue[25];
																											}
																											else {
																												sumprice[25] = sumprice[24];
																												sumvalue[25] = sumvalue[24];
																											}

																											if (sumprice[25] > 300) continue;

																											for (buy[26] = 0; buy[26] < 2; buy[26]++) {
																												if (buy[26] == 1) {
																													sumprice[26] = sumprice[25] + itemprice[26];
																													sumvalue[26] = sumvalue[25] + itemvalue[26];
																												}
																												else {
																													sumprice[26] = sumprice[25];
																													sumvalue[26] = sumvalue[25];
																												}

																												if (sumprice[26] > 300) continue;

																												for (buy[27] = 0; buy[27] < 2; buy[27]++) {
																													if (buy[27] == 1) {
																														sumprice[27] = sumprice[26] + itemprice[27];
																														sumvalue[27] = sumvalue[26] + itemvalue[27];
																													}
																													else {
																														sumprice[27] = sumprice[26];
																														sumvalue[27] = sumvalue[26];
																													}

																													if (sumprice[27] > 300) continue;

																													for (buy[28] = 0; buy[28] < 2; buy[28]++) {
																														if (buy[28] == 1) {
																															sumprice[28] = sumprice[27] + itemprice[28];
																															sumvalue[28] = sumvalue[27] + itemvalue[28];
																														}
																														else {
																															sumprice[28] = sumprice[27];
																															sumvalue[28] = sumvalue[27];
																														}

																														if (sumprice[28] > 300) continue;

																														for (buy[29] = 0; buy[29] < 2; buy[29]++) {
																															if (buy[29] == 1) {
																																sumprice[29] = sumprice[28] + itemprice[29];
																																sumvalue[29] = sumvalue[28] + itemvalue[29];
																															}
																															else {
																																sumprice[29] = sumprice[28];
																																sumvalue[29] = sumvalue[28];
																															}

																															if (sumprice[29] > 300) continue;

																															for (buy[30] = 0; buy[30] < 2; buy[30]++) {
																																if (buy[30] == 1) {
																																	sumprice[30] = sumprice[29] + itemprice[30];
																																	sumvalue[30] = sumvalue[29] + itemvalue[30];
																																}
																																else {
																																	sumprice[30] = sumprice[29];
																																	sumvalue[30] = sumvalue[29];
																																}

																																if (sumprice[30] > 300) continue;

																																for (buy[31] = 0; buy[31] < 2; buy[31]++) {
																																	if (buy[31] == 1) {
																																		sumprice[31] = sumprice[30] + itemprice[31];
																																		sumvalue[31] = sumvalue[30] + itemvalue[31];
																																	}
																																	else {
																																		sumprice[31] = sumprice[30];
																																		sumvalue[31] = sumvalue[30];
																																	}

																																	if (sumprice[31] > 300) continue;

																																	for (buy[32] = 0; buy[32] < 2; buy[32]++) {
																																		if (buy[32] == 1) {
																																			sumprice[32] = sumprice[31] + itemprice[32];
																																			sumvalue[32] = sumvalue[31] + itemvalue[32];
																																		}
																																		else {
																																			sumprice[32] = sumprice[31];
																																			sumvalue[32] = sumvalue[31];
																																		}

																																		if (sumprice[32] > 300) continue;

																																		for (buy[33] = 0; buy[33] < 2; buy[33]++) {
																																			if (buy[33] == 1) {
																																				sumprice[33] = sumprice[32] + itemprice[33];
																																				sumvalue[33] = sumvalue[32] + itemvalue[33];
																																			}
																																			else {
																																				sumprice[33] = sumprice[32];
																																				sumvalue[33] = sumvalue[32];
																																			}

																																			if (sumprice[33] > 300) continue;

																																			for (buy[34] = 0; buy[34] < 2; buy[34]++) {
																																				if (buy[34] == 1) {
																																					sumprice[34] = sumprice[33] + itemprice[34];
																																					sumvalue[34] = sumvalue[33] + itemvalue[34];
																																				}
																																				else {
																																					sumprice[34] = sumprice[33];
																																					sumvalue[34] = sumvalue[33];
																																				}

																																				if (sumprice[34] > 300) continue;

																																				for (buy[35] = 0; buy[35] < 2; buy[35]++) {
																																					if (buy[35] == 1) {
																																						sumprice[35] = sumprice[34] + itemprice[35];
																																						sumvalue[35] = sumvalue[34] + itemvalue[35];
																																					}
																																					else {
																																						sumprice[35] = sumprice[34];
																																						sumvalue[35] = sumvalue[34];
																																					}

																																					if (sumprice[35] > 300) continue;

																																					for (buy[36] = 0; buy[36] < 2; buy[36]++) {
																																						if (buy[36] == 1) {
																																							sumprice[36] = sumprice[35] + itemprice[36];
																																							sumvalue[36] = sumvalue[35] + itemvalue[36];
																																						}
																																						else {
																																							sumprice[36] = sumprice[35];
																																							sumvalue[36] = sumvalue[35];
																																						}

																																						if (sumprice[36] > 300) continue;

																																						for (buy[37] = 0; buy[37] < 2; buy[37]++) {
																																							if (buy[37] == 1) {
																																								sumprice[37] = sumprice[36] + itemprice[37];
																																								sumvalue[37] = sumvalue[36] + itemvalue[37];
																																							}
																																							else {
																																								sumprice[37] = sumprice[36];
																																								sumvalue[37] = sumvalue[36];
																																							}

																																							if (sumprice[37] > 300) continue;

																																							for (buy[38] = 0; buy[38] < 2; buy[38]++) {
																																								if (buy[38] == 1) {
																																									sumprice[38] = sumprice[37] + itemprice[38];
																																									sumvalue[38] = sumvalue[37] + itemvalue[38];
																																								}
																																								else {
																																									sumprice[38] = sumprice[37];
																																									sumvalue[38] = sumvalue[37];
																																								}

																																								if (sumprice[38] > 300) continue;

																																								for (buy[39] = 0; buy[39] < 2; buy[39]++) {
																																									if (buy[39] == 1) {
																																										sumprice[39] = sumprice[38] + itemprice[39];
																																										sumvalue[39] = sumvalue[38] + itemvalue[39];
																																									}
																																									else {
																																										sumprice[39] = sumprice[38];
																																										sumvalue[39] = sumvalue[38];
																																									}

																																									if (sumprice[39] > 300) continue;

																																									for (buy[40] = 0; buy[40] < 2; buy[40]++) {
																																										if (buy[40] == 1) {
																																											sumprice[40] = sumprice[39] + itemprice[40];
																																											sumvalue[40] = sumvalue[39] + itemvalue[40];
																																										}
																																										else {
																																											sumprice[40] = sumprice[39];
																																											sumvalue[40] = sumvalue[39];
																																										}

																																										if (sumprice[40] > 300) continue;

																																										for (buy[41] = 0; buy[41] < 2; buy[41]++) {
																																											if (buy[41] == 1) {
																																												sumprice[41] = sumprice[40] + itemprice[41];
																																												sumvalue[41] = sumvalue[40] + itemvalue[41];
																																											}
																																											else {
																																												sumprice[41] = sumprice[40];
																																												sumvalue[41] = sumvalue[40];
																																											}

																																											if (sumprice[41] > 300) continue;

																																											for (buy[42] = 0; buy[42] < 2; buy[42]++) {
																																												if (buy[42] == 1) {
																																													sumprice[42] = sumprice[41] + itemprice[42];
																																													sumvalue[42] = sumvalue[41] + itemvalue[42];
																																												}
																																												else {
																																													sumprice[42] = sumprice[41];
																																													sumvalue[42] = sumvalue[41];
																																												}

																																												if (sumprice[42] > 300) continue;

																																												for (buy[43] = 0; buy[43] < 2; buy[43]++) {
																																													if (buy[43] == 1) {
																																														sumprice[43] = sumprice[42] + itemprice[43];
																																														sumvalue[43] = sumvalue[42] + itemvalue[43];
																																													}
																																													else {
																																														sumprice[43] = sumprice[42];
																																														sumvalue[43] = sumvalue[42];
																																													}

																																													if (sumprice[43] > 300) continue;

																																													for (buy[44] = 0; buy[44] < 2; buy[44]++) {
																																														if (buy[44] == 1) {
																																															sumprice[44] = sumprice[43] + itemprice[44];
																																															sumvalue[44] = sumvalue[43] + itemvalue[44];
																																														}

																																														if (sumprice[44] > 300) continue;


																																														if (sumprice[44] <= 300 && maxvalue < sumvalue[44]) {
																																															maxvalue = sumvalue[44];
																																															maxprice = sumprice[44];
																																															for (var i = 0; i < 45; i++) {
																																																maxbuy[i] = buy[i];
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	const endTime = performance.now();
	const executionTime = endTime - startTime;

	//結果の表示
	var sname = document.getElementsByName("snackname");
	for (var i = 0; i < 45; i++) {
		if (maxbuy[i] == 1) sname[i].style.backgroundColor = "Red";
	}

	document.getElementById("sumvalue3").textContent = maxvalue;
	document.getElementById("exectime3").textContent = (executionTime / 1000).toFixed(4) + "秒";
	document.getElementById("sumprice3").textContent = maxprice;


	alert("合計金額：" + maxprice + "円" + "\n合計人気度：" + maxvalue + "\n実行時間：" + (executionTime / 1000).toFixed(4) + "秒");

}


function calculation_start() {

	var snacklist = document.getElementsByName("snack");
	var psum = 0;
	var vsum = 0;

	for (i = 0; i < 45; i++) {
		if (snacklist[i].checked) {
			psum = psum + itemprice[i];
			vsum = vsum + itemvalue[i];
		}
	}


	document.getElementById("sumvalue1").textContent = vsum;
	document.getElementById("sumprice1").textContent = psum;


	if (psum > 300) {
		alert("お金が足りないよ!" + "\n合計金額：" + psum + "円" + "\n合計人気度：" + vsum);
		document.getElementsByName("imgname")[0].src = "images/WebApp3.png";
	}
	if (psum < 150) {
		alert("もう少し買えるよ!" + "\n合計金額：" + psum + "円" + "\n合計人気度：" + vsum);
		document.getElementsByName("imgname")[0].src = "images/WebApp4.png";
	}
	if (psum >= 150 && psum <= 300) {
		alert("合計金額：" + psum + "円" + "\n合計人気度：" + vsum);
		document.getElementsByName("imgname")[0].src = "images/WebApp2.png";
	}
}
