import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import qs from "qs";
export const API = axios.create({
  baseURL: "https://api.garirhat.com/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// alLocation list
export const useAlLocation = () => {
  const getAlLocation = async () => {
    const response = await API.get("/location/division_districts");
    return response.data.data;
  };

  const {
    data: alLocation = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["alLocation"],
    queryFn: getAlLocation,
  });

  return { alLocation, isLoading, isError, error, refetch };
};

// divition list
export const useAlDivition = () => {
  const getAlDivition = async () => {
    const response = await API.get("/location/division");
    return response.data.data;
  };

  const {
    data: alDivition = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["alDivition"],
    queryFn: getAlDivition,
  });

  return { alDivition, isLoading, isError, error, refetch };
};

// Products list
export const useAlFeature = () => {
  const getAlFeature = async () => {
    const response = await API.get("/feature/all");
    return response.data.data;
  };

  const {
    data: alFeature = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["alFeature"],
    queryFn: getAlFeature,
  });

  return { alFeature, isLoading, isError, error, refetch };
};

// singleVendor
export const useSingleVendor = (vendorId) => {
  const getSingleVendor = async () => {
    const response = await API.get(`/vendor/${vendorId}`);
    return response.data.data;
  };

  const {
    data: singleVendor = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleVendor", vendorId],
    queryFn: getSingleVendor,
  });

  return { singleVendor, isLoading, isError, error, refetch };
};

// logout 
export const signOutUser = () => {
  localStorage.removeItem("token");
};

//  User Profile
export const useUserProfile = () => {
  const getUserProfile = async () => {
    const response = await API.get(`/user/me`);
    return response.data;
  };
  const {
    data: userProfile = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["UserProfile"],
    queryFn: getUserProfile,
  });
  return { userProfile, isLoading, isError, error, refetch };
};
//  all brand
export const useAllBrand = () => {
  const getAllBrand = async () => {
    const response = await API.get(`/brand`);
    return response.data.data;
  };
  const {
    data: allBrand = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allBrand"],
    queryFn: getAllBrand,
  });
  return { allBrand, isLoading, isError, error, refetch };
};
// all model by brand
export const useModelByBrand = (brandID) => {
  const getModelByBrand = async () => {
    const response = await API.get(`/model?brand_id=${brandID}`);
    return response.data;
  };
  const {
    data: modelByBrand = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["modelByBrand", brandID],
    queryFn: getModelByBrand,
  });
  return { modelByBrand, isLoading, isError, error, refetch };
};

// get brand and model
export const useBrandandModel = () => {
  const getModelandBrand = async () => {
    const response = await API.get(`/brand/with-model?status=active`);
    return response.data;
  };
  const {
    data: modelandBrand = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["ModelandBrand"],
    queryFn: getModelandBrand,
  });
  return { modelandBrand, isLoading, isError, error, refetch };
};

// get single vechile
export const useSingleVechile = (vehicleID) => {
  const getSingleVechile = async () => {
    const response = await API.get(`/vehicle/${vehicleID}`);
    return response.data.data;
  };
  const {
    data: singleVechile = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleVechile", vehicleID],
    queryFn: getSingleVechile,
  });
  return { singleVechile, isLoading, isError, error, refetch };
};

// const storedLocation = localStorage.getItem("selectedLocation"); &district=${storedLocation}  location filter
// /vehicle/all?vehicle_code=T001&model=Camry&year_of_manufacture=2020&year_of_manufacture=2021&make=Honda&page=2&limit=2&sort=&vehicle_code=NATW&page=2&limit=1000?vehicle_code=T002
// All Car list
export const useAllCarList = ({ selectBrand, conditionParams }) => {
  const getAllCarList = async () => {
    let url = `/vehicle/web?make=${encodeURIComponent(selectBrand)}&limit=1000`;

    if (conditionParams && conditionParams !== "advanced-search") {
      url += `&vehicle_condition=${encodeURIComponent(conditionParams)}`;
    }

    const response = await API.get(url);

    return response.data.data;
  };

  const {
    data: allCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allCarList", selectBrand, conditionParams],
    queryFn: getAllCarList,
  });

  return { allCarList, isLoading, isError, error, refetch };
};

// All vehicle without any condition
export const useVehiclewithoutCondition = () => {
  const getVehiclewithoutCondition = async () => {
    const response = await API.get(`/vehicle/web`);
    return response.data.data;
  };

  const {
    data: vehiclewithoutCondition = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["vehiclewithoutCondition"],
    queryFn: getVehiclewithoutCondition,
  });

  return { vehiclewithoutCondition, isLoading, isError, error, refetch };
};

// get WishList vechile
export const useWishListVechile = (user_id) => {
  const getWishListVechile = async () => {
    const response = await API.get(`/wishlist/my?user_id=${user_id}`);
    return response.data.data;
  };
  const {
    data: wishListVechile = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["wishListVechile", user_id],
    queryFn: getWishListVechile,
  });
  return { wishListVechile, isLoading, isError, error, refetch };
};

// most search car list

export const useMostSearchCar = ({ selectBrand }) => {
  const getMostSearchCar = async () => {
    const response = await API.get(
      `/vehicle/all?make=${encodeURIComponent(selectBrand)}&limit=1000`
    );
    return response.data.data;
  };

  const {
    data: mostSearchCar = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["MostSearchCar", selectBrand],
    queryFn: getMostSearchCar,
  });

  return { mostSearchCar, isLoading, isError, error, refetch };
};

//show electrict car
export const useElecticCarList = () => {
  const getElecticCarList = async () => {
    const response = await API.get(
      `/vehicle/all?fuel_type=Electric&limit=1000`
    );
    return response.data.data;
  };

  const {
    data: electicCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["electicCarList"],
    queryFn: getElecticCarList,
  });

  return { electicCarList, isLoading, isError, error, refetch };
};

//show Upcoming car
export const useUpcomingCarList = () => {
  const getUpcomingCarList = async () => {
    const response = await API.get(
      `/vehicle/all?vehicle_condition=Upcoming Car&limit=1000`
    );
    return response.data.data;
  };

  const {
    data: upcomingCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["upcomingCarList"],
    queryFn: getUpcomingCarList,
  });

  return { upcomingCarList, isLoading, isError, error, refetch };
};

//budget vehicle list

export const useBudgetCarList = (startPrice, endPrice) => {
  const getBudgetCarList = async () => {
    // /vehicle/web?start_price=1&end_price=1000000&start_price=1000000&end_price=3000000
    const response = await API.get(
      `/vehicle/all?start_price=${startPrice}&end_price=${endPrice}&limit=1000`
    );
    return response.data.data;
  };

  const {
    data: budgetCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["budgetCarList", startPrice, endPrice],
    queryFn: getBudgetCarList,
    enabled: !!startPrice && !!endPrice,
  });

  return { budgetCarList, isLoading, isError, error, refetch };
};

// All Car Review by model
export const useCarReviewList = (selectModel) => {
  const getCarReviewList = async () => {
    const response = await API.get(
      `/vehicle/all?model=${selectModel}&limit=1000`
    );
    return response.data.data;
  };

  const {
    data: carReviewList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["carReviewList", selectModel],
    queryFn: getCarReviewList,
  });

  return { carReviewList, isLoading, isError, error, refetch };
};
// More car in brand

export const useMoreCarinBrand = (searchBrand) => {
  const getMoreCarinBrand = async () => {
    const response = await API.get(
      `/vehicle/all?make=${searchBrand}&limit=1000`
    );
    return response.data.data;
  };

  const {
    data: moreCarinBrand = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["moreCarinBrand", searchBrand],
    queryFn: getMoreCarinBrand,
  });

  return { moreCarinBrand, isLoading, isError, error, refetch };
};
// part of ratings

export const usePartofRating = () => {
  const getPartofRating = async () => {
    const response = await API.get("/partsNameForRating/all");
    return response.data.data;
  };

  const {
    data: partofRating = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["partofRating"],
    queryFn: getPartofRating,
  });

  return { partofRating, isLoading, isError, error, refetch };
};

// get single model

export const useSingleModel = (ratingModelID) => {
  const getSingleModel = async () => {
    const response = await API.get(`/model/${ratingModelID}`);
    return response.data.data;
  };

  const {
    data: singleModel = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleModel", ratingModelID],
    queryFn: getSingleModel,
  });

  return { singleModel, isLoading, isError, error, refetch };
};

// /model/with-brand

export const useModelWithBrand = () => {
  const getModelWithBrand = async () => {
    const response = await API.get("/model/with-brand");
    return response.data.data;
  };

  const {
    data: modelWithBrand = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["modelWithBrand"],
    queryFn: getModelWithBrand,
  });

  return { modelWithBrand, isLoading, isError, error, refetch };
};
// about us page 
export const useAboutUs = () => {
  const getAboutUs = async () => {
    const response = await API.get("/settings/about-us");
    return response.data.data;
  };

  const {
    data: aboutUs = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["aboutUs"],
    queryFn: getAboutUs,
  });

  return { aboutUs, isLoading, isError, error, refetch };
};
// terms and condition page 
export const useTermandConditions = () => {
  const getTermandConditions = async () => {
    const response = await API.get("/settings/term-condition");
    return response.data.data;
  };

  const {
    data: termandConditions = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["termandConditions"],
    queryFn: getTermandConditions,
  });

  return { termandConditions, isLoading, isError, error, refetch };
};
// privacy policy page 
export const usePrivacyAndPolicy = () => {
  const getPrivacyAndPolicy = async () => {
    const response = await API.get("/settings/privacy-policy");
    return response.data.data;
  };

  const {
    data: PrivacyAndPolicy = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["PrivacyAndPolicy"],
    queryFn: getPrivacyAndPolicy,
  });

  return { PrivacyAndPolicy, isLoading, isError, error, refetch };
};
// my reviews us page 
export const useMyReviews = () => {
  const getMyReviews = async () => {
    const response = await API.get("/rating/my");
    return response.data.data;
  };

  const {
    data: myReviews = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["myReviews"],
    queryFn: getMyReviews,
  });

  return { myReviews, isLoading, isError, error, refetch };
};

export const useAllVehicles = ({
  make = [],
  model = [],
  vehicle_condition = "",
  start_price = "",
  end_price = "",
  body_type = "",
  start_year_of_manufacture = "",
  end_year_of_manufacture = "",
  start_mileage = "",
  end_mileage = "",
  fuel_type = "",
  transmission = "",
  seating_capacity = "",
  color = "",
  start_discount_price = "",
  end_discount_price = "",
  sort = "",
  order = "",
  vendor_id = "",
  district
}) => {
  const getAllVehicle = async () => {
    const response = await API.get("/vehicle/web?limit=30", {
      params: {
        make,
        model,
        vehicle_condition,
        start_price,
        end_price,
        body_type,
        start_year_of_manufacture,
        end_year_of_manufacture,
        start_mileage,
        end_mileage,
        fuel_type,
        transmission,
        seating_capacity,
        color,
        start_discount_price,
        end_discount_price,
        sort,
        order,
        vendor_id,
        district
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" }); // ✅ Array কে multiple query param বানাবে
      },
    });
    return response.data.data;
  };

  const {
    data: allVehicles = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [
      "allVehicles",
      make,
      model,
      vehicle_condition,
      start_price,
      end_price,
      body_type,
      start_year_of_manufacture,
      end_year_of_manufacture,
      start_mileage,
      end_mileage,
      fuel_type,
      transmission,
      seating_capacity,
      color,
      start_discount_price,
      end_discount_price,
      sort,
      order,
      vendor_id,
      district
    ],
    queryFn: getAllVehicle,
  });

  return { allVehicles, isLoading, isError, error, refetch };
};
