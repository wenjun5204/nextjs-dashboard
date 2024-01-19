/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-10 11:09:01
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
import DataTableDemo from './components/table-data';
import { Button } from '@/components/ui/button';
import { TableSearchForm } from './components/table-search';
import { getOnlineData } from '@/app/lib/data';

export default async function Page() {
  const ss = await getOnlineData();
  console.log(666, ss);
  // const [lastData, setLastData] = useState<any>();
  // const fetchReleaseDate = async (id: number) => {
  //   const res = await API.getEct({ onlineProgramId: id });
  //   const {
  //     data: { jobCheckMessage },
  //   } = res || {};
  //   const fedJob = jobCheckMessage
  //     .filter(({ jobName }: any) => jobName.indexOf('waimai_ad_fe_') > -1)
  //     .filter(({ stageCheckData }: any) => stageCheckData.length > 1);
  //   const fedJobHasDependsNum = fedJob.map(
  //     ({ jobName, stageCheckData }: any) => {
  //       return {
  //         jobName: jobName,
  //         stageCheckDataNum: stageCheckData.length,
  //         stageCheckData,
  //       };
  //     },
  //   );
  //   // console.log(666, releaseid.length, fedJobHasDependsNum);
  //   return fedJobHasDependsNum;
  // };

  // // constPromise.allSettledss = function (promises) {
  // //   return Promise.all(promises.map(function (promise) {
  // //     return promise.then(function (value) {
  // //       return { state: 'fulfilled', value: value };
  // //     }).catch(function (reason) {
  // //       return { state: 'rejected', reason: reason };
  // //     });
  // //   }));
  // // };
  // const fetchaAllData = async () => {
  //   const dataPromises = oldData.map(async (item) => {
  //     const result = await fetchReleaseDate(item.onlineProgramId as number);
  //     return result;
  //   });
  //   try {
  //     const allData = await Promise.allSettled(dataPromises);

  //     const ss = handleResData(allData);
  //     console.log(666, ss);
  //     setLastData(ss);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const handleResData = (ss: PromiseSettledResult<any>[]) => {
  //   const res: any = {};
  //   (ss || []).forEach((item: any) => {
  //     const { value } = item || {};
  //     if (Array.isArray(value) && value.length > 0) {
  //       value.map((dd) => {
  //         const { jobName, stageCheckDataNum } = dd || {};
  //         if (res[jobName]) {
  //           res[jobName] = res[jobName] + 1;
  //         } else {
  //           res[jobName] = 1;
  //         }
  //       });
  //     }
  //     // console.log(6, item);
  //   });
  //   return res;
  // };
  // useEffect(() => {
  //   async function fetchData() {
  //     // await fetchReleaseDate(103163);
  //     await fetchaAllData();
  //   }

  //   fetchData();
  // }, []);
  return (
    <div className="mx-auto mt-10 flex w-3/4 flex-col">
      <div>
        <TableSearchForm />
      </div>
      {/* <div className="flex items-center justify-between">
        <Button
          onClick={() => {
            fetchaAllData();
          }}
        >
          输入参数查询上线的数据
        </Button>
        <Button
          onClick={() => {
            fetchaAllData();
          }}
        >
          点击进行数据获取
        </Button>
      </div> */}

      <DataTableDemo />
    </div>
  );
}
